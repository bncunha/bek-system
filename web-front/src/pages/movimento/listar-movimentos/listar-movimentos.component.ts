import { Component, OnInit, Injector, ViewChild } from '@angular/core';
import { BaseListCrud } from 'src/core/classes/base-list.crud';
import { MovimentoController } from '../controllers/movimento-controller.service';
import { ModalComponent } from 'projects/layouts/src/atoms/modal/modal.component';
import { TabelaTamanhoQuantidadeComponent } from 'src/pages/tamanho/tabela-tamanho-quantidade/tabela-tamanho-quantidade.component';
import { QuantidadeTamanho } from 'src/pages/tamanho/dto/QuantidadeTamanho';

@Component({
  selector: 'app-listar-movimentos',
  templateUrl: './listar-movimentos.component.html',
  styleUrls: ['./listar-movimentos.component.scss'],
  providers: [MovimentoController]
})
export class ListarMovimentosComponent extends BaseListCrud {
  @ViewChild('modalQtdTamanho') modal: ModalComponent;
  @ViewChild(TabelaTamanhoQuantidadeComponent) tabelaQtdTamanho: TabelaTamanhoQuantidadeComponent;

  constructor(
    movimentoController: MovimentoController,
    injector: Injector
  ) {
    super(movimentoController, injector);
   }

   visualizarTamanhos(movimento) {
     this.modal.open();
     this.tabelaQtdTamanho.qtdTamanhos = movimento.movimentoHasProdutoTamanho.map(mP => new QuantidadeTamanho(mP.produtoTamanho.tamanho.descricao, mP.quantidade));
   }

}
