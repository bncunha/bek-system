import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable()
export class TableService {

  private _waitComponentsInit = new Subject();
  private qtdResponsesTotal: number = 0;
  private qtdResponsesRecebidas: number = 0;
  constructor() { }

  waitComponentsInit(...qtdComponents: number[]): Observable<any> {
    this.qtdResponsesTotal = qtdComponents.reduce((previous, current) => previous += current, 0);
    return this._waitComponentsInit;
  }
  
  emitComponentCarregado() {
    this.qtdResponsesRecebidas += 1;
    setTimeout(() => {
      this.validarTodosComponentsCarregados();      
    });
  }
  
  validarTodosComponentsCarregados() {
    if (this.qtdResponsesRecebidas >= this.qtdResponsesTotal) {
      this._waitComponentsInit.next({qtdComponentsCarregados: this.qtdResponsesTotal});
    }
  }

  zerarResponses() {
    this.qtdResponsesRecebidas = 0;
    this.qtdResponsesTotal = 0;
  }
}
