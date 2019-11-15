import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EstoqueRoutingModule } from './estoque-routing.module';
import { ListarEstoqueComponent } from './listar-estoque/listar-estoque.component';
import { CoreModule } from 'src/core/core.module';
import { FormEstoqueComponent } from './form-estoque/form-estoque.component';

@NgModule({
  declarations: [ListarEstoqueComponent, FormEstoqueComponent],
  imports: [
    CommonModule,
    EstoqueRoutingModule,
    CoreModule
  ]
})
export class EstoqueModule { }
