import { Injector } from '@angular/core';
import { BaseController } from './base-controller';
import { Router, ActivatedRoute } from '@angular/router';
import { Form } from './form.interface';
import { FormGroup, FormControl } from '@angular/forms';

export class BaseFormCrud {
    id: number;
    model: any;
    form: FormGroup;
    formFactory: Form<any>;

    private route: ActivatedRoute
    constructor(
        private controller: BaseController,
        private injector: Injector
    ) { 
        this.route = injector.get(ActivatedRoute);
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
        console.log('Submit')
        this.validateFormControls(this.form);
        this.id ? await this.controller.update(this.form, this.id) : await this.controller.insert(this.form);
    }

    private validateFormControls(form: FormGroup) {
        Object.keys(form.controls).forEach(key => {
            if(form.controls[key] instanceof FormControl) {
                // new FormControl().markAsTouched
                form.controls[key].markAsDirty();
            } else {
                this.validateFormControls(form[key]);
            }
        })
    }
}