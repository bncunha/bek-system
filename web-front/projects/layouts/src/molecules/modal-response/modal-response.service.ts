import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

interface ModalResponseNotifier {
  type: 1 | 2;
  callback: () => void;
  msg: string;
  subMsg: string
}

@Injectable({
  providedIn: 'root'
})
export class ModalResponseService {
  modalNotification = new Subject<ModalResponseNotifier>();

  constructor() { }

  open(type: 1 | 2, callback?: () => void, msg?: string, subMsg?: string) {
    this.modalNotification.next({
      type: type,
      callback: callback,
      msg: msg,
      subMsg: subMsg
    })
  }
}
