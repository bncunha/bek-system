import { Repository, Like } from "typeorm";
import { ObjectUtils } from "src/utils/ObjectUtils.util";

export class DefaultService<M> {
    populateEntities: string[];
    orderBy: any;
    constructor(
        private repository: Repository<M>,
        populateEntities?: string[],
        orderBy?: any,
    ) {
        this.populateEntities = populateEntities;
        this.orderBy = orderBy;
    }

    criar(model: M): Promise<M> {
        return this.repository.save(model);
    }

    getAll(filters?): Promise<M[]> {
        const filtros = ObjectUtils.cleanNullValues(filters);
        return this.repository.find({relations: this.populateEntities, where: filtros, order: this.orderBy });
    }

    async findOneByID(id: number): Promise<M> {
        const finded = await this.findByID([id]);
        if (!finded[0]) throw new Error('Não foi encontrado objeto com este ID');
        return finded[0];
    }

    findByID(ids: number[]): Promise<M[]> {
        return this.repository.findByIds(ids, {relations: this.populateEntities});
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