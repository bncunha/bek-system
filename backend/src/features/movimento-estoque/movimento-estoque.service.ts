import { Injectable } from '@nestjs/common';
import { DefaultService } from 'src/defaults/DefaultService.class';
import { MovimentoEstoque } from 'src/entities/MovimentoEstoque.entity';
import { MovimentoEstoqueDTO } from './dto/MovimentoEstoqueDTO';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProdutoService } from '../produto/produto.service';
import { ProdutoHasTamanhoService } from '../produto-has-tamanho/produto-has-tamanho.service';
import { ProdutoHasTamanho } from 'src/entities/Produto_has_Tamanho.entity';
import { MovimentoHasProdutoTamanho } from 'src/entities/Movimento_has_ProdutoTamanho.entity';
import { MovimentoHasProdutoTamanhoService } from '../movimento-has-produtotamanho/movimento-has-produtotamanho.service';

@Injectable()
export class MovimentoEstoqueService extends DefaultService<MovimentoEstoque> {

    _repository: Repository<MovimentoEstoque>;
    constructor(
        @InjectRepository(MovimentoEstoque) repository: Repository<MovimentoEstoque>,
        private movimentoTamanhoService: MovimentoHasProdutoTamanhoService,
        private produtoService: ProdutoService,
        private produtoTamanhoService: ProdutoHasTamanhoService,
    ) {
        super(repository,
            ['movimentoHasProdutoTamanho', 'movimentoHasProdutoTamanho.produtoTamanho', 'movimentoHasProdutoTamanho.produtoTamanho.produto', 'movimentoHasProdutoTamanho.produtoTamanho.tamanho'], 
            {idMovimentoEstoque: 'DESC'});
        this._repository = repository;
    }

    async prepararMovimento(movimentoDTO: MovimentoEstoqueDTO): Promise<MovimentoEstoque> {
        let movimento: MovimentoEstoque = Object.assign(new MovimentoEstoque(), movimentoDTO);
        movimento.dataMovimento = movimentoDTO.data;
        movimento.quantidadeTotal = movimentoDTO.quantidadeTamanho.reduce((prev, cur) =>  {
            return movimentoDTO.tipoMovimento == "ENTRADA" ? prev += cur.quantidade : prev -= cur.quantidade
        }, 0);

        const movimentoSaved: MovimentoEstoque = await this._repository.save(movimento);

        for (const qtdTam of movimentoDTO.quantidadeTamanho) {
            try {
                if (qtdTam.quantidade) {
                    const movimentoHasProdutoTamanho = new MovimentoHasProdutoTamanho();
                    const movimentoHasProdutoTamanhoFinded = await this.produtoTamanhoService.findByTamanhoAndProduto(qtdTam.idTamanho, movimentoDTO.idProduto);
                    if (movimentoHasProdutoTamanhoFinded) {
                        movimentoHasProdutoTamanho.idProdutoHasTamanho = movimentoHasProdutoTamanhoFinded.idProdutoHasTamanho;
                        movimentoHasProdutoTamanho.idMovimentoEstoque = movimentoSaved.getId();
                        movimentoHasProdutoTamanho.quantidade = movimentoDTO.tipoMovimento === 'SAIDA' ? -qtdTam.quantidade : qtdTam.quantidade;
                        await this.movimentoTamanhoService.criar(movimentoHasProdutoTamanho);
                        await this.produtoTamanhoService.movimentarQtdTamanho(
                            qtdTam.idTamanho,
                            movimentoDTO.idProduto,
                            qtdTam.quantidade,
                            movimentoDTO.tipoMovimento == "SAIDA" ? "SUB" : "SOMA"
                        )
                    } else {
                        const produtoTamanho = new ProdutoHasTamanho();
                        produtoTamanho.idProduto = movimentoDTO.idProduto;
                        produtoTamanho.idTamanho = qtdTam.idTamanho;
                        produtoTamanho.quantidade = qtdTam.quantidade;
                        const produtoTamanhoSaved = await this.produtoTamanhoService.criar(produtoTamanho);
    
                        movimentoHasProdutoTamanho.idProdutoHasTamanho = produtoTamanhoSaved.getId();
                        movimentoHasProdutoTamanho.idMovimentoEstoque = movimentoSaved.getId();
                        movimentoHasProdutoTamanho.quantidade = qtdTam.quantidade;
                        await this.movimentoTamanhoService.criar(movimentoHasProdutoTamanho);
                    }
                } 
            } catch(err) {
                return err;
            }
        }
        return movimentoSaved;
    }
}
