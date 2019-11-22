import { BaseController } from './base-controller';
import { Observable } from 'rxjs';

export class BaseListCrud {
  items: Observable<any>;

  constructor(private controller: BaseController) { }

  getAll() {
    this.items = this.controller.getAll();
  }

  deletar(id) {
    console.log('Deletar');
    this.controller.delete(id);
  }
}