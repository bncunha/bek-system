import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ListarTamanhosComponent } from './listar-tamanhos/listar-tamanhos.component';
import { FormTamanhoComponent } from './form-tamanho/form-tamanho.component';

const routes: Routes = [
  { path: '', component: ListarTamanhosComponent},
  { path: 'add', component: FormTamanhoComponent},
  { path: 'edit/:id', component: FormTamanhoComponent},
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ], exports: [
    RouterModule
  ]
})
export class TamanhoRoutingModule { }
