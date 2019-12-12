import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TipoProduto } from 'src/entities/TipoProduto.entity';
import { Repository } from 'typeorm';
import { DefaultService } from 'src/defaults/DefaultService.class';

@Injectable()
export class TipoProdutoService extends DefaultService<TipoProduto> {

    constructor(
        @InjectRepository(TipoProduto) repository: Repository<TipoProduto>
    ) { super(repository); }
}
