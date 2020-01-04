import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne } from "typeorm";
import { DefaultEntity } from "../defaults/DefaultEntity.class";
import { CorProduto } from "./CorProduto.entity";
import { TipoProduto } from "./TipoProduto.entity";
import { ProdutoHasTamanho } from "./Produto_has_Tamanho.entity";

@Entity()
export class Produto extends DefaultEntity{
    @PrimaryGeneratedColumn()
    idProduto: number;

    @Column()
    nome: string;

    @Column({nullable: true})
    descricao: string;

    @ManyToOne(type => CorProduto, cor => cor.produtos)
    cor: CorProduto;

    @ManyToOne(type => TipoProduto, tipo => tipo.produtos)
    tipoProduto: TipoProduto

    @OneToMany(type => ProdutoHasTamanho, pt => pt.produto)
    produtoTamanho: ProdutoHasTamanho[];

    quantidadeTotal: number = 0;

    getId() {
        return this.idProduto;
    }
}