import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'lib-btn-secundario',
  templateUrl: './btn-secundario.component.html',
  styleUrls: ['./btn-secundario.component.scss']
})
export class BtnSecundarioComponent implements OnInit {
  @Input() type = "button";

  constructor() { }

  ngOnInit() {
  }

}
