import { MinLength, MaxLength } from "class-validator";

export class CorProdutoDTO {

    @MinLength(3)
    nome: string;

    @MinLength(4)
    @MaxLength(7)
    hex:string;
}