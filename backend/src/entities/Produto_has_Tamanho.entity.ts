import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { DefaultEntity } from "src/defaults/DefaultEntity.class";
import { Produto } from "./Produto.entity";
import { Tamanho } from "./Tamanho.entity";

@Entity()
export class ProdutoHasTamanho extends DefaultEntity{ 
    @PrimaryGeneratedColumn()
    idProdutoHasTamanho: number;

    @Column()
    idProduto: number;

    @Column()
    idTamanho: number;

    @Column({default: 0})
    quantidade: number;

    @ManyToOne(type => Produto, produto => produto.produtoTamanho)
    produto: Produto;

    @ManyToOne(type => Tamanho, tamanho => tamanho.produtoTamanho)
    tamanho: Tamanho

    getId() {
        return this.idProdutoHasTamanho;
    }
}