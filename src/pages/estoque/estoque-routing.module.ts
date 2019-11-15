import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ListarEstoqueComponent } from './listar-estoque/listar-estoque.component';

const routes: Routes = [
  { path: '', component: ListarEstoqueComponent }
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
