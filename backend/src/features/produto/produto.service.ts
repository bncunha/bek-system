import { Injectable } from '@nestjs/common';
import { EntityManager, Repository } from 'typeorm';
import { Produto } from 'src/entities/Produto.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { DefaultService } from 'src/defaults/DefaultService.class';

@Injectable()
export class ProdutoService extends DefaultService<Produto> {
    constructor(@InjectRepository(Produto) repository: Repository<Produto>) {
        super(repository);
    }
}
