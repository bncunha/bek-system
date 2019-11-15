import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriaRoutingModule } from './categoria-routing.module';
import { Routes } from '@angular/router';
import { ListarCategoriaComponent } from './listar-categoria/listar-categoria.component';
import { CoreModule } from 'src/core/core.module';
import { FormCategoriaComponent } from './form-categoria/form-categoria.component';

@NgModule({
  declarations: [ListarCategoriaComponent, FormCategoriaComponent],
  imports: [
    CommonModule,
    CoreModule,
    CategoriaRoutingModule
  ]
})
export class CategoriaModule { }
