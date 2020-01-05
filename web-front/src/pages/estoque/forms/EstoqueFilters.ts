export class EstoqueFilters {
    id: number;
    nome: string;
    tipoProduto: number;

    constructor(params?) {
        if (params) {
            this.id = params['id'];
            this.nome = params['nome'];
            this.tipoProduto = params['tipoProduto'];
        }
    }
}