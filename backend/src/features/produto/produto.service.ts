import { Injectable } from '@nestjs/common';
import { EntityManager, Repository, Like } from 'typeorm';
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
import { GetAllFiltersDTO } from './dto/GetAllFiltersDTO';
import { ProdutoConverter } from './converters/ProdutoConverter';

@Injectable()
export class ProdutoService extends DefaultService<Produto> {
    _repository: Repository<Produto>;
    constructor(
        @InjectRepository(Produto) repository: Repository<Produto>,
        private corService: CorService,
        private tipoProdutoService: TipoProdutoService,
        private tamanhoService: TamanhoService,
        private produtoTamanhoService: ProdutoHasTamanhoService) {
        super(repository, ['tipoProduto', 'produtoTamanho', 'cor', 'cor2', 'cor3']);
        this._repository = repository;
    }

    async criarProduto(produtoDTO: ProdutoDTO) {
        try {
            const cor = await this.corService.findOneByID(produtoDTO.cor);
            const cor2 = await this.corService.findOneByID(produtoDTO.cor2);
            const cor3 = await this.corService.findOneByID(produtoDTO.cor3);
            const tipoProduto = await this.tipoProdutoService.findOneByID(produtoDTO.tipoProduto);
            let newProduto: Produto = Object.assign(new Produto(), produtoDTO);
            newProduto.cor = cor;
            newProduto.cor2 = cor2;
            newProduto.cor3 = cor3;
            newProduto.tipoProduto = tipoProduto;

            const produtoSaved = await this._repository.save(newProduto);
            const res = await this.produtoTamanhoService.addManyTamanhoToProduto(produtoDTO.qtdTamanho, produtoSaved.idProduto);
            return produtoSaved;
        } catch(err) {
            throw new Error(err);
        }
    }

    async atualizarProduto(id: number, produtoDTO: ProdutoDTO) {
        try {
            const cor = await this.corService.findOneByID(produtoDTO.cor);
            const cor2 = await this.corService.findOneByID(produtoDTO.cor2);
            const cor3 = await this.corService.findOneByID(produtoDTO.cor3);
            const tipoProduto = await this.tipoProdutoService.findOneByID(produtoDTO.tipoProduto);
            let produtoFinded: Produto = Object.assign(await super.findOneByID(id), produtoDTO);
            produtoFinded.cor = cor;
            produtoFinded.cor2 = cor2;
            produtoFinded.cor3 = cor3;
            produtoFinded.tipoProduto = tipoProduto;

            const produtoSaved = await this._repository.save(produtoFinded);
            const res = await this.produtoTamanhoService.updateManyTamanhoToProduto(produtoDTO.qtdTamanho, produtoSaved.idProduto);
            return produtoSaved;
        } catch(err) {
            throw new Error(err);
        }
    }

    async getAll(filters: GetAllFiltersDTO): Promise<Produto[]> {        
        let filtros = ProdutoConverter.fromFilters(filters);
        let produtos = await super.getAll(filtros);
        produtos.map(p => p.quantidadeTotal = p.produtoTamanho.reduce((prev, cur) => prev += cur.quantidade, 0));
        return produtos;
    }

    async findOneByID(id: number): Promise<Produto> {
        try {
            let produtoEncontrado = await super.findOneByID(id);
            for (let pt of produtoEncontrado.produtoTamanho) {
                pt.tamanho = await this.tamanhoService.findOne(pt.idTamanho);
            }
            return produtoEncontrado;
        } catch(err) {
            throw new Error(err);
        }
    }

    async delete(id): Promise<boolean>  {
        try {
            let produto = await this.findOneByID(id);
            if (this.possuiEstoque(produto) == false) {
                for (let pt of produto.produtoTamanho) {
                    this.produtoTamanhoService.delete(pt);
                }
                return super.delete(id);
            }
            throw new Error('Este produto possui itens no estoque. Zere o estoque primeiro para depois deletá-lo!');
        } catch(err) {
            throw new Error(err);
        }
    }

    private possuiEstoque(produto: Produto) {
        for(let pt of produto.produtoTamanho) {
            if (pt.quantidade > 0) {
                return true;
            }
        }
        return false;
    }

}
