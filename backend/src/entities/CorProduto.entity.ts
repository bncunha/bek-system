import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne } from "typeorm";
import { DefaultEntity } from "../defaults/DefaultEntity.class";
import { Produto } from "./Produto.entity";

@Entity()
export class CorProduto extends DefaultEntity {
    @PrimaryGeneratedColumn()
    idCorProduto: number;

    @Column()
    nome: string;

    @Column({nullable: true})
    hex: string;

    @ManyToOne(type => Produto, produto => produto.cores)
    produto: Produto;

    getId() {
        return this.idCorProduto;
    }
}