import { Component, OnInit, ElementRef, ContentChild, TemplateRef, ViewChild, AfterViewInit, AfterContentInit } from '@angular/core';
import { TableService } from '../services/table.service';

@Component({
  selector: 'lib-tb-titulo',
  templateUrl: './tb-titulo.component.html',
  styleUrls: ['./tb-titulo.component.scss']
})
export class TbTituloComponent implements OnInit, AfterContentInit {
  @ViewChild(TemplateRef) template: TemplateRef<any>;

  constructor(private tableService: TableService) { }

  ngOnInit() {
  }

  ngAfterContentInit() {
    this.tableService.emitComponentCarregado();
  }

}
