import { BaseController } from './base-controller';
import { Observable } from 'rxjs';
import { ModalResponseService } from 'projects/layouts/src/molecules/modal-response/modal-response.service';
import { Injector } from '@angular/core';

export class BaseListCrud {
  models: Observable<any>;
  private modalService: ModalResponseService;
  constructor(private controller: BaseController, private injector: Injector) { 
    this.modalService = injector.get(ModalResponseService);
  }

  getAll(filters?: any) {
    this.models = this.controller.getAll(filters);
  }

  deletar(id: number) {
    this.controller.delete(id).subscribe(r => this.getAll(), err => {
        this.modalService.open(2, null, 'Erro ao deletar!', err.message);
    });
}
}