import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { DefaultEntity } from "src/defaults/DefaultEntity.class";
import { ProdutoHasTamanho } from "./Produto_has_Tamanho.entity";

@Entity()
export class Tamanho extends DefaultEntity {

    @PrimaryGeneratedColumn()
    idTamanho: number;

    @Column({nullable: false})
    descricao: string;

    @OneToMany(type => ProdutoHasTamanho, pt => pt.tamanho)
    produtoTamanho: ProdutoHasTamanho[];

    getId() {
        return this.idTamanho;
    }

}