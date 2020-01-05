import { Form } from 'src/core/classes/form.interface';
import { FormGroup, Validators } from '@angular/forms';
import { EstoqueFilters } from './EstoqueFilters';

export class EstoqueFiltersForm extends Form<EstoqueFilters> {

    createForm(model: EstoqueFilters): FormGroup {
        return this.fb.group({
            id: [model.id],
            nome: [model.nome],
            tipoProduto: [model.tipoProduto],
        });
    }
}