import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'estoque', pathMatch: 'full'},
  { path: 'movimento', loadChildren: '../pages/movimento/movimento.module#MovimentoModule', data: {title: 'Entrada e saída'}},
  { path: 'estoque', loadChildren: '../pages/estoque/estoque.module#EstoqueModule', data: {title: 'Estoque'}},
  { path: 'categoria', loadChildren: '../pages/categoria/categoria.module#CategoriaModule', data: {title: 'Categoria'}},
  { path: 'tipo-produto', loadChildren: '../pages/tipo-produto/tipo-produto.module#TipoProdutoModule', data: {title: 'Tipo de produto'}},
  { path: 'tamanho', loadChildren: '../pages/tamanho/tamanho.module#TamanhoModule', data: {title: 'Tamanhos'}},
  { path: 'cor', loadChildren: '../pages/cor/cor.module#CorModule', data: {title: 'Cores'}},
  { path: 'cliente', loadChildren: '../pages/cliente/cliente.module#ClienteModule', data: {title: 'Clientes'}}
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
