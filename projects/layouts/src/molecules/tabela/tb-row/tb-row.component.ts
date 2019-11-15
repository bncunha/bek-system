import { Component, OnInit, QueryList, ContentChildren, ViewChild, TemplateRef, AfterViewInit, AfterContentInit } from '@angular/core';
import { TbColComponent } from '../tb-col/tb-col.component';
import { TableService } from '../services/table.service';

@Component({
  selector: 'lib-tb-row',
  templateUrl: './tb-row.component.html',
  styleUrls: ['./tb-row.component.scss']
})
export class TbRowComponent implements OnInit, AfterContentInit {
  @ViewChild(TemplateRef) template: TemplateRef<any>;
  @ContentChildren(TbColComponent) colunas: QueryList<TbColComponent>;

  constructor(private tableService: TableService) { }

  ngOnInit() {
  }
  
  ngAfterContentInit() {
    this.tableService.emitComponentCarregado();
  }

  getTemplate(component) {
    return component.template;
  }

}
