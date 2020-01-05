import { Post, Body, Get, Put, Param, Delete, Req, Query } from "@nestjs/common";
import { DefaultResponse } from "./DefaultResponse.class";
import { DefaultService } from "./DefaultService.class";
import { ERROR_MESSAGE } from "src/constants/ERROR_MESSAGE";

export class DefaultController<M> {
    constructor(
        private service: DefaultService<M>,
    ) {
    }

    async create(modelDTO: any) {
        try {
            const model = Object.assign({}, modelDTO);
            return new DefaultResponse().ok(await this.service.criar(model))
        } catch(err) {
            return new DefaultResponse().error(err, err.errno ? ERROR_MESSAGE.getErrorMsg(err.errno) : err.message);
        }
    }

    async update(id: number, modelDTO: any) {
        try {
            const model = Object.assign({}, modelDTO);
            return new DefaultResponse().ok(await this.service.update(id, model));
        } catch(err) {
            return new DefaultResponse().error(err, err.errno ? ERROR_MESSAGE.getErrorMsg(err.errno) : err.message);
        }
    }

    @Get()
    async listar(@Query() filters: any) {
        try {
            return new DefaultResponse().ok(await this.service.getAll(filters));
        } catch(err) {
            return new DefaultResponse().error(err, err.errno ? ERROR_MESSAGE.getErrorMsg(err.errno) : err.message);
        }
    }

    @Get(':id')
    async findById(@Param('id') id: number) {
        try {
            return new DefaultResponse().ok(await this.service.findOneByID(id));
        } catch(err) {
            return new DefaultResponse().error(err, err.errno ? ERROR_MESSAGE.getErrorMsg(err.errno) : err.message);
        }
    }
    
    @Delete(':id')
    async delete(@Param('id') id: number) {
        try {
            return new DefaultResponse().ok(await this.service.delete(id));
        } catch(err) {
            return new DefaultResponse().error(err, err.errno ? ERROR_MESSAGE.getErrorMsg(err.errno) : err.message);
        }
    }
}