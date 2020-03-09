import { Form } from 'src/core/classes/form.interface';
import { Cliente } from 'src/models/Cliente.model';
import { Validators, FormGroup } from '@angular/forms';

export class ClienteForm extends Form<Cliente> {
    constructor() {
        super();
    }

    createForm(model: Cliente) {
        return this.fb.group({
            nome: [model.nome, [Validators.required]],
            tipoPessoa: [model.tipoPessoa, [Validators.required]],
            cnpj: [model.cnpj, []],
            cpf: [model.cpf, []],
            telefone1: [model.telefone1, []],
            telefone2: [model.telefone2, []],
            telefone3: [model.telefone2, []],
            email1: [model.email1, []],
            email2: [model.email2, []],
            endereco: [model.endereco, []],
        });
    }
}