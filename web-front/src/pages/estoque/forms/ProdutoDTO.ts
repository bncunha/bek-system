import { QuantidadePorTamnhoDTO } from './QuantidadePorTamnhoDTO';
import { TipoProduto } from 'src/models/TipoProduto.model';
import { Cor } from 'src/models/Cor.model';

export interface ProdutoDTO {
    nome: string;
    descricao: string;
    cor: Cor;
    cor2: Cor;
    cor3: Cor;
    tipoProduto: TipoProduto;
    qtdTamanho: QuantidadePorTamnhoDTO[];
}