import { TipoMovimento } from 'src/enums/TIPO_MOVIMENTO.enum';

export class MovimentoDTO {
    data: string;
    tipoMovimento: TipoMovimento;
    quantidadeTamanho: {quantidade: number, idTamanho: number}[];
    idProduto: number;
}
