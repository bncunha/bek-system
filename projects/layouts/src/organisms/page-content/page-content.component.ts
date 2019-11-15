import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'lib-page-content',
  templateUrl: './page-content.component.html',
  styleUrls: ['./page-content.component.scss']
})
export class PageContentComponent implements OnInit {
  @Input() titulo: string;
  @Input() textoBtn: string = 'Novo';
  @Input() link: string;
  constructor() { }

  ngOnInit() {
  }

}
