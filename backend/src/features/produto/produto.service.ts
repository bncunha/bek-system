import { Injectable } from '@nestjs/common';
import { DefaultService } from 'src/defaults/DefaultService.class';
import { EntityManager, Repository } from 'typeorm';
import { Produto } from 'src/entities/Produto.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ProdutoService {
    constructor(@InjectRepository(Produto) private repository: Repository<Produto>) {
    }

    create(produto: Produto) {
        return this.repository.save(produto);
    }
}
