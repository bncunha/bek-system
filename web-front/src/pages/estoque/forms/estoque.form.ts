import { Form } from 'src/core/classes/form.interface';
import { Produto } from 'src/models/Produto.model';
import { FormGroup, Validators } from '@angular/forms';

export class EstoqueForm extends Form<Produto> {

    createForm(model: Produto): FormGroup {
        return this.fb.group({
            nome: [model.nome, Validators.required],
            quantidade: [model.quantidade, Validators.required],
            tipoProduto: [model.tipoProduto, Validators.required]
        });
    }

}