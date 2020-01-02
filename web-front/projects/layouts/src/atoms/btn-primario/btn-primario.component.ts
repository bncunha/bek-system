import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'lib-btn-primario',
  templateUrl: './btn-primario.component.html',
  styleUrls: ['./btn-primario.component.scss'],
})
export class BtnPrimarioComponent implements OnInit {
  @Input() type="button";
  constructor() { }

  ngOnInit() {
  }

}
