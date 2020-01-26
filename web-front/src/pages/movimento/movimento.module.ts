import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovimentoRoutingModule } from './movimento-routing.module';
import { FormMovimentoComponent } from './form-movimento/form-movimento.component';
import { ListarMovimentosComponent } from './listar-movimentos/listar-movimentos.component';
import { CoreModule } from 'src/core/core.module';
import { TamanhoModule } from '../tamanho/tamanho.module';
import { EstoqueModule } from '../estoque/estoque.module';
import { NgxMaskModule } from 'ngx-mask';
@NgModule({
  declarations: [
    FormMovimentoComponent, 
    ListarMovimentosComponent
  ],
  imports: [
    CoreModule,
    MovimentoRoutingModule,
    EstoqueModule,
    TamanhoModule,
    NgxMaskModule.forRoot()
  ]
})
export class MovimentoModule { }
