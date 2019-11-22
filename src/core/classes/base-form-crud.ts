import { Injector } from '@angular/core';
import { BaseController } from './base-controller';
import { Router, ActivatedRoute } from '@angular/router';
import { Form } from './form.interface';

export class BaseFormCrud {
    id: string;
    model: any;
    form: any;

    private route: ActivatedRoute
    constructor(
        private controller: BaseController,
        private injector: Injector
    ) { 
        this.route = injector.get(ActivatedRoute);
    }

    init(formFactory) {
        this.id = this.route.snapshot.params['id'];
        this.form = formFactory.createForm({});
        if (this.id) {
            this.controller.getOne(this.id).subscribe(r => this.form.patchValue(r.data))
        }
    }

    async submit() {
        this.id ? await this.controller.update(this.form, this.id) : await this.controller.insert(this.form);
    }
}