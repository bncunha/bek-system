import { Repository } from "typeorm";

export class DefaultService<M> {
    
    constructor(
        private repository: Repository<M>
    ){}

    criar(model: M): Promise<M> {
        return this.repository.save(model);
    }

    getAll(): Promise<M[]> {
        return this.repository.find();
    }

    findByID(ids: number[]): Promise<M[]> {
        return this.repository.findByIds(ids);
    }

    async update(id: number, mdoel: M): Promise<M> {
        const finded: M[] = await this.repository.findByIds([id]);
        if (!finded[0]) throw new Error('Não foi encontrado objeto com este ID')
        Object.assign(finded[0], mdoel);
        return this.repository.save(finded[0]);
    }

    async delete(id): Promise<boolean>  {
        const finded: M[] = await this.repository.findByIds([id]);
        if (!finded[0]) throw new Error('Não foi encontrado objeto com este ID')
        return await this.repository.delete(id) ? true : false;
    }
}