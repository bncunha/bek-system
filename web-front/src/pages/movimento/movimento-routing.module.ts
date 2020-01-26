import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ListarMovimentosComponent } from './listar-movimentos/listar-movimentos.component';
import { FormMovimentoComponent } from './form-movimento/form-movimento.component';
import { EstoqueModule } from '../estoque/estoque.module';

const routes: Routes = [
  { path: '', component: ListarMovimentosComponent},
  { path: 'add/:tipoMovimento', component: FormMovimentoComponent},
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ], exports: [
    RouterModule,
  ]
})
export class MovimentoRoutingModule { }
