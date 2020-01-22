import { Controller, Post, Put, Body, Param } from '@nestjs/common';
import { MovimentoEstoqueDTO } from './dto/MovimentoEstoqueDTO';
import { DefaultController } from 'src/defaults/DefaultController.class';
import { MovimentoEstoque } from 'src/entities/MovimentoEstoque.entity';
import { MovimentoEstoqueService } from './movimento-estoque.service';
import { DefaultResponse } from 'src/defaults/DefaultResponse.class';
import { ERROR_MESSAGE } from 'src/constants/ERROR_MESSAGE';

@Controller('movimento-estoque')
export class MovimentoEstoqueController extends DefaultController<MovimentoEstoque> {

    _service: MovimentoEstoqueService;
    constructor(service: MovimentoEstoqueService) {
        super(service);
        this._service = service;
    }

    @Post()
    async create(@Body() movimentoDTO: MovimentoEstoqueDTO) {
        try {
            return new DefaultResponse().ok(await this._service.prepararMovimento(movimentoDTO))
        } catch(err) {
            return new DefaultResponse().error(err, err.errno ? ERROR_MESSAGE.getErrorMsg(err.errno) : err.message);
        }
    }
    
    // @Put(':id')
    // async update(@Param('id') id: number, @Body() movimentoDTO: MovimentoEstoqueDTO) {
    //     return super.update(id, await this._service.prepararMovimento(movimentoDTO));
    // }
}
