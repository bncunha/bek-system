import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TipoProduto } from 'src/entities/TipoProduto.entity';
import { Repository } from 'typeorm';
import { DefaultService } from 'src/defaults/DefaultService.class';
import { MovimentoHasProdutoTamanho } from 'src/entities/Movimento_has_ProdutoTamanho.entity';

@Injectable()
export class MovimentoHasProdutoTamanhoService extends DefaultService<MovimentoHasProdutoTamanho> {

    constructor(
        @InjectRepository(MovimentoHasProdutoTamanho) repository: Repository<MovimentoHasProdutoTamanho>
    ) { super(repository); }
}
