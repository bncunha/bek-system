import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ListarClientesComponent } from './listar-clientes/listar-clientes.component';
import { FormClienetComponent } from './form-clienet/form-clienet.component';

const routes: Routes = [
  { path: '', component: ListarClientesComponent},
  { path: 'add', component: FormClienetComponent},
  { path: 'edit/:id', component: FormClienetComponent},
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ], exports: [
    RouterModule
  ]
})
export class ClienteRoutingModule { }
