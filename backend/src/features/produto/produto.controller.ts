import { Controller, Post } from '@nestjs/common';
import { ProdutoService } from './produto.service';
import { DefaultController } from 'src/defaults/DefaultController.class';
import { Produto } from 'src/entities/Produto.entity';

@Controller('produto')
export class ProdutoController {

    constructor(private produtoService: ProdutoService) {
    }

    findAll() {
        throw new Error("Method not implemented.");
    }
    getOne() {
        throw new Error("Method not implemented.");
    }

    @Post()
    async create() {
        const produto = new Produto();
        produto.nome = 'Produto teste';
        return await this.produtoService.create(produto);
    }

    update() {
        throw new Error("Method not implemented.");
    }
    delete() {
        throw new Error("Method not implemented.");
    }

}
