import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'estoque', pathMatch: 'full'},
  { path: 'estoque', loadChildren: '../pages/estoque/estoque.module#EstoqueModule'},
  { path: 'categoria', loadChildren: '../pages/categoria/categoria.module#CategoriaModule'},
  { path: 'tipo-produto', loadChildren: '../pages/tipo-produto/tipo-produto.module#TipoProdutoModule'},
  { path: 'tamanho', loadChildren: '../pages/tamanho/tamanho.module#TamanhoModule'}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ], exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
