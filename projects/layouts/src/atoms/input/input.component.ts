import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'lib-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent implements OnInit {
  @Output() focus = new EventEmitter();
  @Output() blur = new EventEmitter();
  @Input() id: string;
  @Input() value: string;
  constructor() { }

  ngOnInit() {
  }
  
}
