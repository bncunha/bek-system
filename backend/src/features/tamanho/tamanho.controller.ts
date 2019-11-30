import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { TamanhoDTO } from './dto/CriarTamanhoDTO';
import { DefaultResponse } from 'src/defaults/DefaultResponse.class';
import { DefaultController } from 'src/defaults/DefaultController.int';
import { Tamanho } from 'src/entities/Tamanho.entity';
import { TamanhoService } from './tamanho.service';

@Controller('tamanho')
export class TamanhoController{
    
    constructor(private service: TamanhoService) {}

    @Post()
    async create(@Body() tamanhoDTO: TamanhoDTO) {
        try {
            const t = Object.assign(new Tamanho(), tamanhoDTO);
            return new DefaultResponse().ok(await this.service.criarTamanho(t))
        } catch(err) {
            return new DefaultResponse().error(err, "Erro ao criar novo tamanho");
        }
    }

    @Get()
    async listar() {
        try {
            return new DefaultResponse().ok(await this.service.getAll());
        } catch(err) {
            return new DefaultResponse().error(err, "Erro ao recuperar todos os tamanho");
        }
    }

    @Put(':id')
    async update(@Param('id') id: number, @Body() tamanhoDTO: TamanhoDTO) {
        try {
            const t = Object.assign(new Tamanho(), tamanhoDTO);
            return new DefaultResponse().ok(await this.service.update(id, t));
        } catch(err) {
            return new DefaultResponse().error(err, "Erro ao atualizar os tamanhos");
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
