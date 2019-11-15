import { FormGroup } from '@angular/forms';
import { of, Observable } from 'rxjs';
import { DefaultResponse } from './default-response';
import { BaseService } from './base-service';
import { Form } from './form.interface';

export class BaseController {
    baseService: BaseService

    constructor(baseService: BaseService) {
        this.baseService = baseService;
    }

    async insert(form: FormGroup): Promise<DefaultResponse> {
        if (form.valid) {
            const model = Object.assign({}, form.value);
            return await this.baseService.insert(model);
        } else {
            console.log('Formulário inválido', form);
            return new DefaultResponse().error('Formulário inválido');
        }
    }

    async update(form: FormGroup, id: string): Promise<DefaultResponse> {
        if (form.valid) {
            const model = Object.assign({}, form.value);
            return await this.baseService.update(model, id);
        } else {
            console.log('Formulário inválido', form);
            return new DefaultResponse().error('Formulário inválido');
        }
    }

    delete(id) {
        return this.baseService.delete(id);
    }

    getAll(): Observable<any[]> {
        return this.baseService.getAll();
    }

    getOne(id: string): Observable<DefaultResponse> {
        return this.baseService.findById(id);
    }
}