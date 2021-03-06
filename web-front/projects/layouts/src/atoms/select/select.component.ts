import { Component, OnInit, Output, EventEmitter, Input, HostBinding, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'lib-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit {
  @ViewChild('select') select: ElementRef;

  @Output() focus = new EventEmitter();
  @Output() blur = new EventEmitter();
  @Output() change = new EventEmitter();
  @Input() id: string;

  @Input() items: any[];
  @Input() labelBind: string = 'nome';
  @Input() attrBind: string = 'id';
  @Input() multi: boolean = false;

  selectValue: FormControl = new FormControl();
  constructor(private renderer: Renderer2) { }

  ngOnInit() {
  }

}
