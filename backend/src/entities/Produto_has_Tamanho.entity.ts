import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, PrimaryColumn, OneToMany } from "typeorm";
import { DefaultEntity } from "src/defaults/DefaultEntity.class";
import { Produto } from "./Produto.entity";
import { Tamanho } from "./Tamanho.entity";
import { MovimentoHasProdutoTamanho } from "./Movimento_has_ProdutoTamanho.entity";

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
    @JoinColumn({name: 'idProduto'})
    produto: Produto;
    
    @ManyToOne(type => Tamanho, tamanho => tamanho.produtoTamanho)
    @JoinColumn({name: 'idTamanho'})
    tamanho: Tamanho

    @OneToMany(type => MovimentoHasProdutoTamanho, mov => mov.produtoTamanho)
    movimentos: MovimentoHasProdutoTamanho[];

    getId() {
        return this.idProdutoHasTamanho;
    }
}