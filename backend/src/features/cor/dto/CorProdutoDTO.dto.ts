import { MinLength, MaxLength, IsOptional } from "class-validator";

export class CorProdutoDTO {

    @MinLength(3)
    nome: string;
    
    @IsOptional()
    @MinLength(4)
    @MaxLength(7)
    hex:string;
}