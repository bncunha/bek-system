import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TipoProdutoRoutingModule } from './tipo-produto-routing.module';
import { ListarTipoProdutoComponent } from './listar-tipo-produto/listar-tipo-produto.component';
import { FormTipoProdutoComponent } from './form-tipo-produto/form-tipo-produto.component';
import { CoreModule } from 'src/core/core.module';
import { TipoProdutoControllerService } from './controllers/tipo-produto-controller.service';

@NgModule({
  declarations: [ListarTipoProdutoComponent, FormTipoProdutoComponent],
  imports: [
    CommonModule,
    TipoProdutoRoutingModule,
    CoreModule
  ], providers: [
    TipoProdutoControllerService
  ]
})
export class TipoProdutoModule { }
