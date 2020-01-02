import { Form } from 'src/core/classes/form.interface';
import { CrudTamanhoDTO } from './CrudTamanhoDTO';
import { FormGroup, Validators } from '@angular/forms';

export class CrudTamanhoDTOForm extends Form<CrudTamanhoDTO> {

    createForm(model: CrudTamanhoDTO): FormGroup {
        return this.fb.group({
            descricao: [model.descricao, [Validators.required, Validators.minLength(5)]]
        })
    }

}