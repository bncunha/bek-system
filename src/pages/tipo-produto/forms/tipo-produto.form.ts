import { Form } from 'src/core/classes/form.interface';
import { TipoProduto } from 'src/models/TipoProduto.model';
import { Validators } from '@angular/forms';

export class TipoProdutoForm extends Form<TipoProduto> {
    constructor() {
        super();
    }

    createForm(model: TipoProduto) {
        return this.fb.group({
            nome: [model.nome, [Validators.required]],
            descricao: [model.descricao, [Validators.required]]
        });
    }
}