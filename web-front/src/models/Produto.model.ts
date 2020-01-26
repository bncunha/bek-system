import { Cor } from './Cor.model';

export class Produto {
    idProduto: number;
    nome: string;
    quantidade: number;
    tipoProduto: any;
    produtoTamanho: any;
    cor: Cor;
    cor2: Cor;
    cor3: Cor;

    constructor() {}
}