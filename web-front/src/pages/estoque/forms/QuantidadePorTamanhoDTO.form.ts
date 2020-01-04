import { Form } from 'src/core/classes/form.interface';
import { Produto } from 'src/models/Produto.model';
import { FormGroup, Validators } from '@angular/forms';
import { ProdutoDTO } from './ProdutoDTO';
import { Tamanho } from 'src/models/Tamanho.model';
import { QuantidadePorTamnhoDTO } from './QuantidadePorTamnhoDTO';

export class QuantidadePorTamanhoDTOForm extends Form<QuantidadePorTamnhoDTO> {

    createForm(model: QuantidadePorTamnhoDTO): FormGroup {
        return this.fb.group({
            tamanho: [model.tamanho, Validators.required],
            quantidadeInicial: [model.quantidadeInicial ? model.quantidadeInicial : 0, Validators.required],
        });
    }
}