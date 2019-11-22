import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Location } from '@angular/common';

@Component({
  selector: 'lib-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  @Output() salvar = new EventEmitter();

  constructor(private loc: Location) { }

  ngOnInit() {
  }

  cancelar() {
    this.loc.back();
  }

}
