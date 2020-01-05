import { FormGroup } from '@angular/forms';
import { of, Observable, throwError } from 'rxjs';
import { map, tap, catchError } from 'rxjs/operators';
import { BaseService } from './base-service';
import { DefaultResponse } from './default-response';
import { Router, ActivatedRoute } from '@angular/router';
import { Form } from 'src/core/classes/form.interface';
import { Injector } from '@angular/core';
import { RESPONSE_STATUS } from '../constants/RESPONSE_STATUS.enum';

export class BaseController {
    baseService: BaseService

    constructor(
        baseService: BaseService) {
        this.baseService = baseService;
    }

    async insert(form: FormGroup): Promise<DefaultResponse> {
        if (form.valid) {
            const model = Object.assign({}, form.value);
            return await (await this.baseService.insert(model)).toPromise();
        } else {
            console.log('Formulário inválido', form);
            return new DefaultResponse().error('Formulário inválido', null, RESPONSE_STATUS.FORMULARIO_INVALIDO);
        }
    }

    async update(form: FormGroup, id: number): Promise<DefaultResponse> {
        if (form.valid) {
            const model = Object.assign({}, form.value);
            return await this.baseService.update(model, id).toPromise();
        } else {
            console.log('Formulário inválido', form);
            return new DefaultResponse().error('Formulário inválido');
        }
    }

    delete(id: number) {
        return this.baseService.delete(id).pipe(
            catchError(err => {
                return throwError((new DefaultResponse().error(err.error.message)));
            })
        );
    }

    getAll(filters?): Observable<any[]> {
        return this.baseService.getAll(filters).pipe(tap(r => console.log('GETALL(): ', r)));
    }

    getOne(id: number): Observable<any> {
        return this.baseService.findById(id).pipe(tap(r => console.log('GET ONE():', r)));
    }
}