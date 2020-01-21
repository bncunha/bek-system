import { IsNotEmpty, IsDate, IsEnum, Min, IsDateString } from "class-validator";

export class MovimentoEstoqueDTO {

    @IsNotEmpty()
    @IsDateString()
    data: Date;

    @IsNotEmpty()
    @IsEnum({
        ENTRADA: "ENTRADA",
        SAIDA: "SAIDA"
    })
    tipoMovimento: "ENTRADA" | "SAIDA";

    @IsNotEmpty()
    quantidadeTamanho: {
        quantidade: number,
        idTamanho: number
    }[];

    @IsNotEmpty()
    idProduto: number;
}