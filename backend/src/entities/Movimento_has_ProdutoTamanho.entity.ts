import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, PrimaryColumn } from "typeorm";
import { DefaultEntity } from "src/defaults/DefaultEntity.class";
import { Produto } from "./Produto.entity";
import { Tamanho } from "./Tamanho.entity";
import { ProdutoHasTamanho } from "./Produto_has_Tamanho.entity";
import { MovimentoEstoque } from "./MovimentoEstoque.entity";

@Entity()
export class MovimentoHasProdutoTamanho extends DefaultEntity{ 
    @PrimaryGeneratedColumn()
    idMovimentoHasTamanho: number;

    @Column()
    idProdutoHasTamanho: number;

    @Column()
    idMovimentoEstoque: number;

    @Column({default: 0})
    quantidade: number;

    @ManyToOne(type => ProdutoHasTamanho, produtoTamanho => produtoTamanho.movimentos)
    @JoinColumn({name: 'idProdutoHasTamanho'})
    produtoTamanho: ProdutoHasTamanho;

    @ManyToOne(type => MovimentoEstoque, mov => mov.movimentoHasProdutoTamanho)
    @JoinColumn({name: 'idMovimentoEstoque'})
    movimentoEstoque: MovimentoEstoque;

    getId() {
        return this.idMovimentoHasTamanho;
    }
}