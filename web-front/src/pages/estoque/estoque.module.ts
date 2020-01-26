import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EstoqueRoutingModule } from './estoque-routing.module';
import { ListarEstoqueComponent } from './listar-estoque/listar-estoque.component';
import { CoreModule } from 'src/core/core.module';
import { FormEstoqueComponent } from './form-estoque/form-estoque.component';
import { ProdutoControllerService } from './controllers/produto-controller.service';
import { TamanhoModule } from '../tamanho/tamanho.module';
import { TabelaEstoqueComponent } from './tabela-estoque/tabela-estoque.component';

@NgModule({
  declarations: [ListarEstoqueComponent, FormEstoqueComponent, TabelaEstoqueComponent],
  imports: [
    CommonModule,
    EstoqueRoutingModule,
    CoreModule,
    TamanhoModule
  ], providers: [
    ProdutoControllerService
  ], exports: [TabelaEstoqueComponent]
})
export class EstoqueModule { }
