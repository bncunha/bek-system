import { Component, OnInit } from '@angular/core';
import { BaseListCrud } from 'src/core/classes/base-list.crud';
import { ProdutoControllerService } from '../controllers/produto-controller.service';

@Component({
  selector: 'app-listar-estoque',
  templateUrl: './listar-estoque.component.html',
  styleUrls: ['./listar-estoque.component.scss'],
})
export class ListarEstoqueComponent extends BaseListCrud implements OnInit {

  constructor(controller: ProdutoControllerService) {
    super(controller);
   }

  ngOnInit() {
  }

}
