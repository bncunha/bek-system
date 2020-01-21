import { Component, OnInit, Injector } from '@angular/core';
import { BaseListCrud } from 'src/core/classes/base-list.crud';
import { MovimentoController } from '../controllers/movimento-controller.service';

@Component({
  selector: 'app-listar-movimentos',
  templateUrl: './listar-movimentos.component.html',
  styleUrls: ['./listar-movimentos.component.scss'],
  providers: [MovimentoController]
})
export class ListarMovimentosComponent extends BaseListCrud {

  constructor(
    movimentoController: MovimentoController,
    injector: Injector
  ) {
    super(movimentoController, injector);
   }

}
