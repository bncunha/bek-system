import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'lib-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent implements OnInit {
  @Output() focus = new EventEmitter();
  @Output() blur = new EventEmitter();
  @Output() change = new EventEmitter();
  @Input() id: string;
  @Input() mascara: string;

  value: FormControl = new FormControl();
  constructor() { }

  ngOnInit() {
  }

}
