import { Injectable } from '@nestjs/common';
import { DefaultService } from 'src/defaults/DefaultService.class';
import { MovimentoEstoque } from 'src/entities/MovimentoEstoque.entity';
import { MovimentoEstoqueDTO } from './dto/MovimentoEstoqueDTO';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProdutoService } from '../produto/produto.service';
import { ProdutoHasTamanhoService } from '../produto-has-tamanho/produto-has-tamanho.service';
import { ProdutoHasTamanho } from 'src/entities/Produto_has_Tamanho.entity';

@Injectable()
export class MovimentoEstoqueService extends DefaultService<MovimentoEstoque> {

    constructor(
        @InjectRepository(MovimentoEstoque) repository: Repository<MovimentoEstoque>,
        private produtoService: ProdutoService,
        private produtoTamanhoService: ProdutoHasTamanhoService
    ) {
        super(repository);
    }

    async prepararMovimento(movimentoDTO: MovimentoEstoqueDTO): Promise<MovimentoEstoque> {
        let movimento: MovimentoEstoque = Object.assign(new MovimentoEstoque(), movimentoDTO);
        movimento.dataMovimento = movimentoDTO.data;
        movimento.quantidadeTotal = movimentoDTO.quantidadeTamanho.reduce((prev, cur) =>  {
            return movimentoDTO.tipoMovimento == "ENTRADA" ? prev += cur.quantidade : prev -= cur.quantidade
        }, 0);
        movimento.produto = await this.produtoService.findOneByID(movimentoDTO.idProduto);

        for (let qtdTam of movimentoDTO.quantidadeTamanho) {
            await this.produtoTamanhoService.movimentarQtdTamanho(
                qtdTam.idTamanho, 
                movimentoDTO.idProduto, 
                qtdTam.quantidade, 
                movimentoDTO.tipoMovimento == "SAIDA" ? "SUB" : "SOMA"
            )
        }
        return movimento;
    }
}
