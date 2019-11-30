import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { DefaultEntity } from "../defaults/DefaultEntity.class";
import { CorProduto } from "./CorProduto.entity";

@Entity()
export class Produto extends DefaultEntity{
    @PrimaryGeneratedColumn()
    idProduto: number;

    @Column()
    nome: string;

    @Column({nullable: true})
    descricao: string;

    @OneToMany(type => CorProduto, cor => cor.produto)
    cores: CorProduto[];

    getId() {
        return this.idProduto;
    }
}