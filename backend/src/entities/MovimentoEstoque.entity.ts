import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne, ManyToMany, JoinTable } from "typeorm";
import { DefaultEntity } from "../defaults/DefaultEntity.class";
import { Produto } from "./Produto.entity";
import { ProdutoHasTamanho } from "./Produto_has_Tamanho.entity";
import { MovimentoHasProdutoTamanho } from "./Movimento_has_ProdutoTamanho.entity";

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

    @OneToMany(type => MovimentoHasProdutoTamanho, mov => mov.movimentoEstoque)
    movimentoHasProdutoTamanho: MovimentoHasProdutoTamanho[];

    getId() {
        return this.idMovimentoEstoque;
    }
}