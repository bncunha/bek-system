import { MinLength } from "class-validator"
import { Tamanho } from "src/entities/Tamanho.entity";
import { TamanhoDTO } from "src/features/tamanho/dto/CriarTamanhoDTO";

export class TipoProdutoDTO {

    @MinLength(3)
    nome: string;

    @MinLength(3)
    descricao: string;

    tamanhos: number[];
}