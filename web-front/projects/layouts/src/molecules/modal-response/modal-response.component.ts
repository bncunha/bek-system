import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ModalComponent } from '../../atoms/modal/modal.component';
import { ModalResponseService } from './modal-response.service';

@Component({
  selector: 'lib-modal-response',
  templateUrl: './modal-response.component.html',
  styleUrls: ['./modal-response.component.scss']
})
export class ModalResponseComponent implements OnInit {
  @ViewChild(ModalComponent) modal: ModalComponent;
  @ViewChild('buttonConfirm') buttonConfirm: ElementRef;

  /**
   * SUCCESS: 1, ERROR: 2
   */
  type: 1 | 2;
  msg: string;
  subMsg : string;

  private callbackOnClose: () => void;

  constructor(
    private modalResponseService: ModalResponseService
  ) { }

  ngOnInit() {
    this.modalResponseService.modalNotification.subscribe(r => this.open(r.type, r.callback, r.msg, r.subMsg));
  }

  open(type: 1 | 2, callback?: () => void, msg?: string, subMsg?: string) {
    this.type = type;
    this.callbackOnClose = callback;
    this.msg = msg;
    this.subMsg = subMsg;
    this.buttonConfirm.nativeElement.focus();
    this.modal.open();
  }

  close() {
    this.modal.close();
    if (this.callbackOnClose) {
      this.callbackOnClose();
    }
  }


}
