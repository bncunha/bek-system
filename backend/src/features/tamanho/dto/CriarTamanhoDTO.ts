import {MinLength} from "class-validator";


export class TamanhoDTO {

    @MinLength(5)
    descricao: string;
}