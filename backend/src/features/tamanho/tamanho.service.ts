import { Injectable, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Tamanho } from 'src/entities/Tamanho.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TamanhoService {

    constructor(
        @InjectRepository(Tamanho) private repository: Repository<Tamanho>
    ) {}

    criarTamanho(tamanho: Tamanho): Promise<Tamanho> {
        return this.repository.save(tamanho);
    }

    getAll(): Promise<Tamanho[]> {
        return this.repository.find();
    }

    async update(id: number, tamanho: Tamanho): Promise<Tamanho> {
        const finded: Tamanho[] = await this.repository.findByIds([id]);
        if (!finded[0]) throw new Error('Não foi encontrado objeto com este ID')
        Object.assign(finded[0], tamanho);
        return this.repository.save(finded[0]);
    }

    async delete(id): Promise<boolean>  {
        const finded: Tamanho[] = await this.repository.findByIds([id]);
        if (!finded[0]) throw new Error('Não foi encontrado objeto com este ID')
        return await this.repository.delete(id) ? true : false;
    }
}
