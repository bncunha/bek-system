import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormCorComponent } from './form-cor/form-cor.component';
import { ListarCoresComponent } from './listar-cores/listar-cores.component';

const routes: Routes = [
  { path: '', component: ListarCoresComponent},
  { path: 'add', component: FormCorComponent},
  { path: 'edit/:id', component: FormCorComponent},
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class CorRoutingModule { }
