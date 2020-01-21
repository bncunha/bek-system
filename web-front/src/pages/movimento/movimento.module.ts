import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovimentoRoutingModule } from './movimento-routing.module';
import { FormMovimentoComponent } from './form-movimento/form-movimento.component';
import { ListarMovimentosComponent } from './listar-movimentos/listar-movimentos.component';
import { CoreModule } from 'src/core/core.module';

@NgModule({
  declarations: [
    FormMovimentoComponent, 
    ListarMovimentosComponent
  ],
  imports: [
    CoreModule,
    MovimentoRoutingModule
  ]
})
export class MovimentoModule { }
