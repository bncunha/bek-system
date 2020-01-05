import { GetAllFiltersDTO } from "../dto/GetAllFiltersDTO";
import { Like } from "typeorm";

export class ProdutoConverter {

    static fromFilters(filters: GetAllFiltersDTO) {
        return filters ? {
            idProduto: filters.id,
            nome: filters.nome ? Like(`%${filters.nome}%`) : null,
            tipoProduto: filters.tipoProduto ? {
                idTipoProduto: filters.tipoProduto
            } : null
        } : null
    }
    
}