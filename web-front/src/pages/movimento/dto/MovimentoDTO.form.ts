import { Form } from 'src/core/classes/form.interface';
import { FormGroup, Validators, FormArray } from '@angular/forms';
import { MovimentoDTO } from './MovimentoDTO';
import { Tamanho } from 'src/models/Tamanho.model';
import * as moment from 'moment';

export class MovimentoDTOForm extends Form<MovimentoDTO> {

    createForm(model: MovimentoDTO): FormGroup {
        return this.fb.group({
            data: [model.data, [Validators.required]],
            tipoMovimento: [model.tipoMovimento, [Validators.required]],
            idProduto: [model.idProduto, [Validators.required]],
            quantidadeTamanho: this.fb.array([]),
        });
    }

    createQtdTamanhoArray(tamanhos: Tamanho[], form: FormGroup) {
        const array = form.get('quantidadeTamanho') as FormArray;
        this.zerarFormArray(array);
        tamanhos.forEach((t: any) => {
            array.push(this.fb.group({
                idTamanho: t.idTamanho,
                quantidade: 0
            }));
        });
    }

    getFormValue(form: FormGroup) {
        const model = Object.assign({}, form.getRawValue());
        model.data = moment(model.data, 'DD/MM/YYYY hh:mm').toISOString();
        model.quantidadeTamanho.forEach(qt => qt.quantidade = Number(qt.quantidade))
        return model;
    }

}
