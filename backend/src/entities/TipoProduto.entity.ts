import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable, ManyToOne } from "typeorm";
import { DefaultEntity } from "src/defaults/DefaultEntity.class";
import { type } from "os";
import { Tamanho } from "./Tamanho.entity";
import { Produto } from "./Produto.entity";

@Entity()
export class TipoProduto extends DefaultEntity {
    @PrimaryGeneratedColumn()
    idTipoProduto: number;

    @Column({nullable: false})
    nome: string;

    @Column()
    descricao: string;

    @ManyToMany(type => Tamanho)
    @JoinTable()
    tamanhos: Tamanho[];

    @ManyToOne(type => Produto, produto => produto.tipoProduto)
    produtos: Produto[];

    getId() {
        return this.idTipoProduto;
    }
}