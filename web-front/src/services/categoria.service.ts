import { Injectable } from '@angular/core';
import { BaseService } from 'src/core/classes/base-service';
import { AngularFireDatabase } from '@angular/fire/database';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService extends BaseService {

  constructor(http: HttpClient) { 
    super('categorias', http);
  }
}
