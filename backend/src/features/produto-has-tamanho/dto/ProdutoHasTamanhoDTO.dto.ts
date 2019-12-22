import { Produto } from "src/entities/Produto.entity";
import { Tamanho } from "src/entities/Tamanho.entity";
import { Min } from "class-validator";

export class ProdutoHasTamanhoDTO {
    tamanho: number;

    @Min(0)
    quantidadeInicial: number;
}