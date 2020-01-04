import { ProdutoHasTamanhoDTO } from "src/features/produto-has-tamanho/dto/ProdutoHasTamanhoDTO.dto";
import { MinLength, IsNotEmpty } from "class-validator";

export class ProdutoDTO {

    @MinLength(3)
    @IsNotEmpty()
    nome: string;

    descricao: string;

    cor: number;

    @IsNotEmpty()
    tipoProduto: number;


    qtdTamanho: ProdutoHasTamanhoDTO[];
}