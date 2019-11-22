import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'lib-principal-template',
  templateUrl: './principal-template.component.html',
  styleUrls: ['./principal-template.component.scss']
})
export class PrincipalTemplateComponent implements OnInit {
  @Input() menuSidebar: any[]
  constructor() { }

  ngOnInit() {
  }

}
