import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'lib-label',
  templateUrl: './label.component.html',
  styleUrls: ['./label.component.scss']
})
export class LabelComponent implements OnInit {
  @Input() for: string;
  constructor() { }

  ngOnInit() {
  }

}
