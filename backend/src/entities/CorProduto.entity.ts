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

    @OneToMany(type => Produto, produto => produto.cor, {nullable: true})
    produtos: Produto[];

    @OneToMany(type => Produto, produto => produto.cor2, {nullable: true})
    produtos2: Produto[];

    @OneToMany(type => Produto, produto => produto.cor3, {nullable: true})
    produtos3: Produto[];

    getId() {
        return this.idCorProduto;
    }
}