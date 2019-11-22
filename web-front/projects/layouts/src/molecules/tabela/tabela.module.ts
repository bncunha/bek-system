import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabelaComponent } from './tabela.component';
import { TbTituloComponent } from './tb-titulo/tb-titulo.component';
import { TbRowComponent } from './tb-row/tb-row.component';
import { TbColComponent } from './tb-col/tb-col.component';
import { TableService } from './services/table.service';
import { AtomsModule } from '../../atoms/atoms.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    TabelaComponent,
    TbTituloComponent,
    TbRowComponent,
    TbColComponent
  ],
  imports: [
    CommonModule,
    AtomsModule,
    RouterModule
  ], providers: [
    TableService
  ],
  exports: [
    TabelaComponent,
    TbTituloComponent,
    TbRowComponent,
    TbColComponent
  ]
})
export class TabelaModule { }
