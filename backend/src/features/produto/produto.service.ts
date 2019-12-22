import { Injectable } from '@nestjs/common';
import { EntityManager, Repository } from 'typeorm';
import { Produto } from 'src/entities/Produto.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { DefaultService } from 'src/defaults/DefaultService.class';
import { ProdutoDTO } from './dto/ProdutoDTO.dto';
import { CorService } from '../cor/cor.service';
import { TipoProdutoService } from '../tipo-produto/tipo-produto.service';
import { TamanhoService } from '../tamanho/tamanho.service';
import { ProdutoHasTamanho } from 'src/entities/Produto_has_Tamanho.entity';
import { ProdutoHasTamanhoService } from '../produto-has-tamanho/produto-has-tamanho.service';
import { Tamanho } from 'src/entities/Tamanho.entity';

@Injectable()
export class ProdutoService extends DefaultService<Produto> {
    _repository: Repository<Produto>;
    constructor(
        @InjectRepository(Produto) repository: Repository<Produto>,
        private corService: CorService,
        private tipoProdutoService: TipoProdutoService,
        private tamanhoService: TamanhoService,
        private produtoTamanhoService: ProdutoHasTamanhoService) {
        super(repository);
        this._repository = repository;
    }

    async criarProduto(produtoDTO: ProdutoDTO) {
        try {
            const cor = await this.corService.findOneByID(produtoDTO.cor);
            const tipoProduto = await this.tipoProdutoService.findOneByID(produtoDTO.tipoProduto);
            let newProduto: Produto = Object.assign(new Produto(), produtoDTO);
            newProduto.cor = cor;
            newProduto.tipoProduto = tipoProduto;

            const produtoSaved = await this._repository.save(newProduto);
            const res = await this.produtoTamanhoService.addManyTamanhoToProduto(produtoDTO.qtdTamanho, produtoSaved.idProduto);
            console.log(res);
            return produtoSaved;
        } catch(err) {
            throw new Error(err);
        }
    }

    async atualizarProduto(id: number, produtoDTO: ProdutoDTO) {
        try {
            const cor = await this.corService.findOneByID(produtoDTO.cor);
            const tipoProduto = await this.tipoProdutoService.findOneByID(produtoDTO.tipoProduto);
            let produtoFinded: Produto = Object.assign(await super.findOneByID(id), produtoDTO);
            produtoFinded.cor = cor;
            produtoFinded.tipoProduto = tipoProduto;

            const produtoSaved = await this._repository.save(produtoFinded);
            const res = await this.produtoTamanhoService.updateManyTamanhoToProduto(produtoDTO.qtdTamanho, produtoSaved.idProduto);
            console.log(res);
            return produtoSaved;
        } catch(err) {
            throw new Error(err);
        }
    }
}
