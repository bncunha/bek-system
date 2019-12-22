import { Controller, Post, Body, Put, Param } from '@nestjs/common';
import { ProdutoService } from './produto.service';
import { Produto } from 'src/entities/Produto.entity';
import { DefaultController } from 'src/defaults/DefaultController.class';
import { ProdutoDTO } from './dto/ProdutoDTO.dto';
import { CorService } from '../cor/cor.service';
import { TipoProdutoService } from '../tipo-produto/tipo-produto.service';
import { DefaultResponse } from 'src/defaults/DefaultResponse.class';

@Controller('produto')
export class ProdutoController extends DefaultController<Produto> {

    _service: ProdutoService;
    constructor(service: ProdutoService) {
        super(service);
        this._service = service;
    }

    @Post()
    async create(@Body() produtoDTO: ProdutoDTO) {
        try {
            return new DefaultResponse().ok(await this._service.criarProduto(produtoDTO));
        } catch (err) {
            return new DefaultResponse().error(err, "Erro ao criar novo produto");
        }
    }
    
    @Put(':id')
    async update(@Param('id') id: number, @Body() produtoDTO: ProdutoDTO) {
        try {
            return new DefaultResponse().ok(await this._service.atualizarProduto(id, produtoDTO));
        } catch (err) {
            return new DefaultResponse().error(err, "Erro ao atualizar novo produto");
        };
    }

}
