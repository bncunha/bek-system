import { Injectable } from '@angular/core';
import { BaseService } from 'src/core/classes/base-service';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService extends BaseService {

  constructor(db: AngularFireDatabase) { 
    super(db, 'produtos')
  }
}
