import { Injector, } from '@angular/core';
import { Location } from '@angular/common';
import { BaseController } from './base-controller';
import { Router, ActivatedRoute,  } from '@angular/router';
import { Form } from './form.interface';
import { FormGroup, FormControl, FormArray } from '@angular/forms';
import { ModalResponseService } from 'projects/layouts/src/molecules/modal-response/modal-response.service';
import { RESPONSE_STATUS } from '../constants/RESPONSE_STATUS.enum';
import { Observable } from 'rxjs';

export class BaseFormCrud {
    id: number;
    model: any;
    form: FormGroup;
    formFactory: Form<any>;

    private route: ActivatedRoute;
    private modalService: ModalResponseService;
    private location: Location;

    constructor(
        private controller: BaseController,
        private injector: Injector
    ) { 
        this.route = injector.get(ActivatedRoute);
        this.modalService = injector.get(ModalResponseService);
        this.location = injector.get(Location);
    }

    init(formFactory) {
        this.id = this.route.snapshot.params['id'];
        this.formFactory = formFactory;
        this.form = formFactory.createForm({});
        if (this.id) {
            this.controller.getOne(this.id).subscribe(r => this.formFactory.updateForm(this.form, r.data));
            setTimeout(() => {
                console.log(this.form)
            }, 2000);
        }
    }

    async submit() {
        this.validateFormControls(this.form);
        console.log('Submit', this.form);
        const resp = this.id ? await this.controller.update(this.form, this.id) : await this.controller.insert(this.form);
        if (resp.status == 200) {
            this.modalService.open(1, this.location.back.bind(this.location), 'Sucesso!', 'Operação realizada com sucesso!');
        } else if (resp.status != RESPONSE_STATUS.FORMULARIO_INVALIDO) {
            this.modalService.open(2, null, 'Erro!', resp.message);
        }
    }

    private validateFormControls(form: FormGroup | FormArray) {
        Object.keys(form.controls).forEach(key => {
            if(form.controls[key] instanceof FormControl) {
                // new FormControl().markAsTouched
                form.controls[key].markAsDirty();
            } else {
                this.validateFormControls(form.controls[key]);
            }
        })
    }

}