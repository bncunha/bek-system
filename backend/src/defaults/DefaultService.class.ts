import { EntityManager } from "typeorm";
import { DefaultEntity } from "./DefaultEntity.class";

export class DefaultService {

    constructor(private entityManager: EntityManager, private entity: any) {

    }

    findAll() {
        return this.entityManager.find(this.entity.toString())
    }

    create(entity: DefaultEntity) {
        console.log(entity);
        return this.entityManager.create(this.entity, entity);
    }
}