import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ListarEstoqueComponent } from './listar-estoque/listar-estoque.component';
import { FormEstoqueComponent } from './form-estoque/form-estoque.component';

const routes: Routes = [
  { path: '', component: ListarEstoqueComponent },
  { path: 'add', component: FormEstoqueComponent },
  { path: 'edit/:id', component: FormEstoqueComponent }
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
export class EstoqueRoutingModule { }
