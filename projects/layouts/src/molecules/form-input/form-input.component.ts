import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { InputComponent } from '../../atoms/input/input.component';

@Component({
  selector: 'lib-form-input',
  templateUrl: './form-input.component.html',
  styleUrls: ['./form-input.component.scss']
})
export class FormInputComponent implements OnInit {
  @ViewChild(InputComponent) input: InputComponent;
  @Input() label: string = 'Nome';

  isFloating = false;
  idInput: string;
  constructor() { }

  ngOnInit() {
    this.gerarIdInput();
  }

  detectFloat(event: 'FOCUS' | 'BLUR') {
    this.isFloating = event == 'FOCUS' || (this.input.value != null && this.input.value != undefined && this.input.value != '');
  }
  
  gerarIdInput() {
    this.idInput = this.label + new Date().getTime();
  }
}
