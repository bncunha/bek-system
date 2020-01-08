import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'lib-color-box',
  templateUrl: './color-box.component.html',
  styleUrls: ['./color-box.component.scss']
})
export class ColorBoxComponent implements OnInit {
  @Input() cor: string;
  @Input() small: boolean = false;
  constructor() { }

  ngOnInit() {
  }

}
