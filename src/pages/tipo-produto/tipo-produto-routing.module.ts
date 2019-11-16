import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ListarTipoProdutoComponent } from './listar-tipo-produto/listar-tipo-produto.component';
import { FormTipoProdutoComponent } from './form-tipo-produto/form-tipo-produto.component';

const routes: Routes = [
  { path: '', component: ListarTipoProdutoComponent},
  { path: 'add', component: FormTipoProdutoComponent},
  { path: 'edit/:id', component: FormTipoProdutoComponent},
]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ], exports: [
    RouterModule
  ]
})
export class TipoProdutoRoutingModule { }
