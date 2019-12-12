import { Injectable } from '@nestjs/common';
import { DefaultService } from 'src/defaults/DefaultService.class';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CorProduto } from 'src/entities/CorProduto.entity';

@Injectable()
export class CorService extends DefaultService<CorProduto>{
    constructor(
        @InjectRepository(CorProduto) repository: Repository<CorProduto>
    ) { super(repository) }
}
