import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, PrimaryColumn } from "typeorm";
import { DefaultEntity } from "src/defaults/DefaultEntity.class";
import { Produto } from "./Produto.entity";
import { Tamanho } from "./Tamanho.entity";

@Entity()
export class ProdutoHasTamanho extends DefaultEntity{ 
    @PrimaryGeneratedColumn()
    idProdutoHasTamanho: number;

    @PrimaryColumn()
    idProduto: number;

    @PrimaryColumn()
    idTamanho: number;

    @Column({default: 0})
    quantidade: number;

    @ManyToOne(type => Produto, produto => produto.produtoTamanho)
    @JoinColumn({name: 'idProduto'})
    produto: Produto;
    
    @ManyToOne(type => Tamanho, tamanho => tamanho.produtoTamanho)
    @JoinColumn({name: 'idTamanho'})
    tamanho: Tamanho

    getId() {
        return this.idProdutoHasTamanho;
    }
}