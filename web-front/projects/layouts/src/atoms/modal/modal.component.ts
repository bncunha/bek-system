import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  show = false;

  constructor() { }

  ngOnInit() {
  }

  open() {
    this.show = true;
  }

  close() {
    this.show = false;
  }

}
