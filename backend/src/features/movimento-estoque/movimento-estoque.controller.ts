import { Controller, Post, Put, Body, Param } from '@nestjs/common';
import { MovimentoEstoqueDTO } from './dto/MovimentoEstoqueDTO';
import { DefaultController } from 'src/defaults/DefaultController.class';
import { MovimentoEstoque } from 'src/entities/MovimentoEstoque.entity';
import { MovimentoEstoqueService } from './movimento-estoque.service';

@Controller('movimento-estoque')
export class MovimentoEstoqueController extends DefaultController<MovimentoEstoque> {

    _service: MovimentoEstoqueService;
    constructor(service: MovimentoEstoqueService) {
        super(service);
        this._service = service;
    }

    @Post()
    async create(@Body() movimentoDTO: MovimentoEstoqueDTO) {
        return super.create(await this._service.prepararMovimento(movimentoDTO));
    }
    
    // @Put(':id')
    // async update(@Param('id') id: number, @Body() movimentoDTO: MovimentoEstoqueDTO) {
    //     return super.update(id, await this._service.prepararMovimento(movimentoDTO));
    // }
}
