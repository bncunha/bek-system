import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne } from "typeorm";
import { DefaultEntity } from "../defaults/DefaultEntity.class";
import { Produto } from "./Produto.entity";

@Entity()
export class MovimentoEstoque extends DefaultEntity {
    @PrimaryGeneratedColumn()
    idMovimentoEstoque: number;

    @Column({nullable: false})
    dataMovimento: Date;

    @Column({
        type: "enum",
        enum: ["ENTRADA", "SAIDA"],
    })
    tipoMovimento: string;

    @Column({nullable: false})
    quantidadeTotal: number;

    @ManyToOne(type => Produto, produto => produto.movimentosEstoque)
    produto: Produto

    getId() {
        return this.idMovimentoEstoque;
    }
}