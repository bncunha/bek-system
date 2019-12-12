import { Post, Body, Get, Put, Param, Delete } from "@nestjs/common";
import { DefaultResponse } from "./DefaultResponse.class";
import { DefaultService } from "./DefaultService.class";

export class DefaultController<M> {
    constructor(
        private service: DefaultService<M>
    ) {}

    async create(modelDTO: any) {
        try {
            const model = Object.assign({}, modelDTO);
            return new DefaultResponse().ok(await this.service.criar(model))
        } catch(err) {
            return new DefaultResponse().error(err, "Erro ao criar novo objeto");
        }
    }

    async update(id: number, modelDTO: any) {
        try {
            const model = Object.assign({}, modelDTO);
            return new DefaultResponse().ok(await this.service.update(id, model));
        } catch(err) {
            return new DefaultResponse().error(err, "Erro ao atualizar objeto");
        }
    }

    @Get()
    async listar() {
        try {
            return new DefaultResponse().ok(await this.service.getAll());
        } catch(err) {
            return new DefaultResponse().error(err, "Erro ao recuperar todos os objetos");
        }
    }

    @Get(':id')
    async findById(@Param('id') id: number) {
        try {
            return new DefaultResponse().ok(await this.service.findOneByID(id));
        } catch(err) {
            return new DefaultResponse().error(err, "Erro ao recuperar objeto pelo id");
        }
    }
    
    @Delete(':id')
    async delete(@Param('id') id: number) {
        try {
            return new DefaultResponse().ok(await this.service.delete(id));
        } catch(err) {
            return new DefaultResponse().error(err, "Erro ao excluir");
        }
    }
}