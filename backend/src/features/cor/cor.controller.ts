import { Controller, Post, Body, Put, Param } from '@nestjs/common';
import { DefaultController } from 'src/defaults/DefaultController.class';
import { TipoProdutoService } from '../tipo-produto/tipo-produto.service';
import { CorProdutoDTO } from './dto/CorProdutoDTO.dto';
import { CorProduto } from 'src/entities/CorProduto.entity';
import { CorService } from './cor.service';

@Controller('cor')
export class CorController extends DefaultController<CorProduto> {

    constructor(service: CorService) {
        super(service);
    }

    @Post()
    async create(@Body() corDTO: CorProdutoDTO) {
        return super.create(corDTO);
    }
    
    @Put(':id')
    async update(@Param('id') id: number, @Body() corDTO: CorProdutoDTO) {
        return super.update(id, corDTO);
    }
}
