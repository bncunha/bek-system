import { Controller, Post, Body } from '@nestjs/common';
import { ProdutoService } from './produto.service';
import { Produto } from 'src/entities/Produto.entity';
import { DefaultController } from 'src/defaults/DefaultController.class';
import { ProdutoDTO } from './dto/ProdutoDTO.dto';

@Controller('produto')
export class ProdutoController extends DefaultController<Produto> {

    constructor(service: ProdutoService) {
        super(service);
    }
    
    // @Post()
    // async create(@Body() produtoDTO: ProdutoDTO) {
    //     const cor =
    //     tipoProduto.tamanhos = tamanhos;
    //     return super.create(tipoProduto);
    // }
    
    // @Put(':id')
    // async update(@Param('id') id: number, @Body() tipoProdutoDTO: TipoProdutoDTO) {
    //     const tamanhos: Tamanho[] = await this.tamanhoService.findByIDs(tipoProdutoDTO.tamanhos);
    //     let tipoProduto: TipoProduto = Object.assign(new TipoProduto(), tipoProdutoDTO);
    //     tipoProduto.tamanhos = tamanhos;
    //     return super.update(id, tipoProduto);
    // }

}
