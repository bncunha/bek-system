import { FormGroup } from '@angular/forms';
import { of, Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { BaseService } from './base-service';
import { DefaultResponse } from './default-response';
import { Router, ActivatedRoute } from '@angular/router';
import { Form } from 'src/core/classes/form.interface';
import { Injector } from '@angular/core';

export class BaseController {
    baseService: BaseService

    constructor(
        baseService: BaseService) {
        this.baseService = baseService;
    }

    async insert(form: FormGroup): Promise<any> {
        if (form.valid) {
            const model = Object.assign({}, form.value);
            return await (await this.baseService.insert(model)).toPromise();
        } else {
            console.log('Formulário inválido', form);
            return new DefaultResponse().error('Formulário inválido');
        }
    }

    async update(form: FormGroup, id: number): Promise<any> {
        if (form.valid) {
            const model = Object.assign({}, form.value);
            return await this.baseService.update(model, id).toPromise();
        } else {
            console.log('Formulário inválido', form);
            return new DefaultResponse().error('Formulário inválido');
        }
    }

    delete(id: number) {
        return this.baseService.delete(id).pipe(tap(r => this.getAll()));
    }

    getAll(): Observable<any[]> {
        return this.baseService.getAll().pipe(tap(r => console.log('GETALL(): ', r)),map(r => r.data));
    }

    getOne(id: number): Observable<any> {
        return this.baseService.findById(id).pipe(tap(r => console.log('GET ONE():', r)));
    }
}