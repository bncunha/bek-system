import { Form } from 'src/core/classes/form.interface';
import { Categoria } from 'src/models/Categoria.model';
import { Validators } from '@angular/forms';

export class CategoriaForm extends Form<Categoria> {
    constructor() {
        super();
    }

    createForm(model: Categoria) {
        return this.fb.group({
            nome: [model.nome, [Validators.required]],
            descricao: [model.descricao, [Validators.required]]
        });
    }
}