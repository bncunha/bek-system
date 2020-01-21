import { Injectable } from '@nestjs/common';
import { DefaultService } from 'src/defaults/DefaultService.class';
import { ProdutoHasTamanho } from 'src/entities/Produto_has_Tamanho.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProdutoHasTamanhoDTO } from './dto/ProdutoHasTamanhoDTO.dto';

@Injectable()
export class ProdutoHasTamanhoService extends DefaultService<ProdutoHasTamanho> {
    tamanhoRepository: Repository<ProdutoHasTamanho>;

    constructor(
        @InjectRepository(ProdutoHasTamanho) repository: Repository<ProdutoHasTamanho>
    ) { super(repository); this.tamanhoRepository = repository }

    addTamanhoToProduto(tamanhoID: number, produtoID: number, qtd: number): Promise<ProdutoHasTamanho> {
        const produtoTamanho = new ProdutoHasTamanho();
        produtoTamanho.idTamanho = tamanhoID;
        produtoTamanho.idProduto = produtoID;
        produtoTamanho.quantidade = qtd;
        return this.tamanhoRepository.save(produtoTamanho)
    }

    async updateTamanhoToProduto(tamanhoID: number, produtoID: number, qtd: number): Promise<ProdutoHasTamanho> {
        const produtoTamanho = await this.findByTamanhoAndProduto(tamanhoID, produtoID);
        produtoTamanho.idTamanho = tamanhoID;
        produtoTamanho.idProduto = produtoID;
        produtoTamanho.quantidade = qtd;
        return this.tamanhoRepository.save(produtoTamanho)
    }

    addManyTamanhoToProduto(produtoHasTamanhoDTO: ProdutoHasTamanhoDTO[], produtoID: number): Promise<ProdutoHasTamanho[]> {
        let requests: Promise<ProdutoHasTamanho>[] = [];
        produtoHasTamanhoDTO.forEach((t) => requests.push(this.addTamanhoToProduto(t.tamanho, produtoID, t.quantidadeInicial)));
        return Promise.all(requests);
    }

    async updateManyTamanhoToProduto(produtoHasTamanhoDTO: ProdutoHasTamanhoDTO[], produtoID: number): Promise<ProdutoHasTamanho[]> {
        let tamanhoHasProdutos: ProdutoHasTamanho[]  = [];
        for(let produtoTamanho of produtoHasTamanhoDTO) {
            tamanhoHasProdutos.push(await this.updateTamanhoToProduto(produtoTamanho.tamanho, produtoID, produtoTamanho.quantidadeInicial));
        }
        return tamanhoHasProdutos;
    }

    findByTamanhoAndProduto(idTamanho: number, idProduto: number): Promise<ProdutoHasTamanho> {
        return this.tamanhoRepository.findOne({
            where: {
                idTamanho: idTamanho,
                idProduto: idProduto
            }
        })
    }

    async movimentarQtdTamanho(idTamanho: number, idProduto: number, qtd: number, operacao: "SOMA" | "SUB"): Promise<ProdutoHasTamanho> {
        let qtdTamanho = await this.findByTamanhoAndProduto(idTamanho, idProduto);
        let qtdAtualizado: number;
        if (operacao == "SOMA") {
            qtdAtualizado = qtdTamanho.quantidade + qtd;
        } else {
            qtdAtualizado = qtdTamanho.quantidade - qtd;
        }
        return this.updateTamanhoToProduto(idTamanho, idProduto, qtdAtualizado);
    }
}
