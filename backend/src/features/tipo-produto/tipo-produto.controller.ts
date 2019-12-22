import { Controller, Post, Body, Put, Param } from '@nestjs/common';
import { DefaultController } from 'src/defaults/DefaultController.class';
import { TipoProduto } from 'src/entities/TipoProduto.entity';
import { TipoProdutoService } from './tipo-produto.service';
import { TipoProdutoDTO } from './dto/TipoProdutoDTO.dto';
import { TamanhoService } from '../tamanho/tamanho.service';
import { Tamanho } from 'src/entities/Tamanho.entity';

@Controller('tipo-produto')
export class TipoProdutoController extends DefaultController<TipoProduto>{

    constructor(
        service: TipoProdutoService,
        private tamanhoService: TamanhoService) {
        super(service);
    }

    @Post()
    async create(@Body() tipoProdutoDTO: TipoProdutoDTO) {
        let tipoProduto: TipoProduto = Object.assign(new TipoProduto(), tipoProdutoDTO);
        if (tipoProdutoDTO.tamanhos) {
            const tamanhos: Tamanho[] = await this.tamanhoService.findByIDs(tipoProdutoDTO.tamanhos);
            tipoProduto.tamanhos = tamanhos;
        }
        return super.create(tipoProduto);
    }
    
    @Put(':id')
    async update(@Param('id') id: number, @Body() tipoProdutoDTO: TipoProdutoDTO) {
        let tipoProduto: TipoProduto = Object.assign(new TipoProduto(), tipoProdutoDTO);
        if (tipoProdutoDTO.tamanhos) {
            const tamanhos: Tamanho[] = await this.tamanhoService.findByIDs(tipoProdutoDTO.tamanhos);
            tipoProduto.tamanhos = tamanhos;
        }
        return super.update(id, tipoProduto);
    }

}
