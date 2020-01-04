import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { DefaultResponse } from './default-response';
import { Injectable, Optional } from '@angular/core';
import { map } from 'rxjs/operators';

export class BaseService {
    databaseKey: string;
    http: HttpClient;

    constructor(databaseKey: string, http: HttpClient ) {
        this.databaseKey = databaseKey;
        this.http = http;
    }   

    async insert(model: any) {
        return this.http.post<DefaultResponse>(`${environment.backEndUrl}/${this.databaseKey}`, model);
    }

    update(model: any, id: number): Observable<DefaultResponse> {
        return this.http.put<DefaultResponse>(`${environment.backEndUrl}/${this.databaseKey}/${id}`, model);
    }

    delete(id: number) {
        return this.http.delete<DefaultResponse>(`${environment.backEndUrl}/${this.databaseKey}/${id}`);
    }

    getAll(): Observable<any[]> {
        return this.http.get<DefaultResponse>(`${environment.backEndUrl}/${this.databaseKey}`).pipe(map(r => r.data));
    }

    findById(id: number): Observable<DefaultResponse> {
        return this.http.get<DefaultResponse>(`${environment.backEndUrl}/${this.databaseKey}/${id}`);
    }
}