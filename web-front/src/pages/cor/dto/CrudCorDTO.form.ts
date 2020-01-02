import { Form } from 'src/core/classes/form.interface';
import { CrudCorDTO } from './CrudCorDTO';
import { FormGroup, Validators } from '@angular/forms';

export class CrudCorDTOForm extends Form<CrudCorDTO> {

    createForm(model: CrudCorDTO): FormGroup {
        return this.fb.group({
            nome: [model.nome, [Validators.required, Validators.minLength(3)]],
            hex: [model.nome, [Validators.required, Validators.minLength(4), Validators.maxLength(7)]]
        })
    }
}