import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ListarCategoriaComponent } from './listar-categoria/listar-categoria.component';
import { FormCategoriaComponent } from './form-categoria/form-categoria.component';

const routes: Routes = [
  { path: '', component:  ListarCategoriaComponent},
  { path: 'add', component: FormCategoriaComponent }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class CategoriaRoutingModule { }
