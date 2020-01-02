import { Component, OnInit, ContentChildren, QueryList, AfterContentInit, AfterViewInit, OnDestroy } from '@angular/core';
import { TbTituloComponent } from './tb-titulo/tb-titulo.component';
import { TbRowComponent } from './tb-row/tb-row.component';
import { of, Observable, pipe } from 'rxjs';
import { take } from 'rxjs/operators';
import { TableService } from './services/table.service';

@Component({
  selector: 'lib-tabela',
  templateUrl: './tabela.component.html',
  styleUrls: ['./tabela.component.scss']
})
export class TabelaComponent implements OnInit, AfterViewInit, OnDestroy {
  @ContentChildren(TbTituloComponent) titulos: QueryList<TbTituloComponent>;
  @ContentChildren(TbRowComponent) linhas: QueryList<TbRowComponent>;

  isComponentesCarregados = false;
  constructor(
    private tableService: TableService
  ) { }
  
  ngOnInit() {
  }
  
  get qtdColunas() {
    return this.linhas.toArray().reduce((previous, current) => {
      return previous += current.colunas.length;
    }, 0)
  }
  
  ngAfterViewInit() {
    this.waitComponentsInit();
  }
  
  waitComponentsInit() {
    this.tableService.waitComponentsInit(this.titulos.length, this.linhas.length, this.qtdColunas).pipe(take(1)).subscribe(response => {
      setTimeout(() => {
        this.isComponentesCarregados = true;
      }); 
    });
  }

  getTemplate(component) {
    return component.template;
  }

  ngOnDestroy() {
    this.tableService.zerarResponses();
  }
}
