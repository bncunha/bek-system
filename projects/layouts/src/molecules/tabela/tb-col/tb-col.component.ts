import { Component, OnInit, TemplateRef, ViewChild, AfterViewInit, AfterContentInit } from '@angular/core';
import { TableService } from '../services/table.service';

@Component({
  selector: 'lib-tb-col',
  templateUrl: './tb-col.component.html',
  styleUrls: ['./tb-col.component.scss']
})
export class TbColComponent implements OnInit, AfterContentInit {
  @ViewChild(TemplateRef) template: TemplateRef<any>;

  constructor(private tableService: TableService) { }

  ngOnInit() {
  }
  
  ngAfterContentInit() {
    this.tableService.emitComponentCarregado();
  }

}
