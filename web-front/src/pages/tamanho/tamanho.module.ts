import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TamanhoRoutingModule } from './tamanho-routing.module';
import { ListarTamanhosComponent } from './listar-tamanhos/listar-tamanhos.component';
import { FormTamanhoComponent } from './form-tamanho/form-tamanho.component';
import { TamanhoController } from './controllers/tamanho-controller.service';
import { CoreModule } from 'src/core/core.module';
import { TabelaTamanhoQuantidadeComponent } from './tabela-tamanho-quantidade/tabela-tamanho-quantidade.component';

@NgModule({
  declarations: [ListarTamanhosComponent, FormTamanhoComponent, TabelaTamanhoQuantidadeComponent],
  imports: [
    CommonModule,
    CoreModule,
    TamanhoRoutingModule
  ], providers: [
    TamanhoController
  ], exports: [TabelaTamanhoQuantidadeComponent]
})
export class TamanhoModule { }
