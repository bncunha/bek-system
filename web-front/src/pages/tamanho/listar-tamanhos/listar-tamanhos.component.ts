import { Component, OnInit, Injector } from '@angular/core';
import { BaseFormCrud } from 'src/core/classes/base-form-crud';
import { TamanhoController } from '../controllers/tamanho-controller.service';
import { Tamanho } from 'src/models/Tamanho.model';
import { Observable } from 'rxjs';
import { BaseListCrud } from 'src/core/classes/base-list.crud';

@Component({
  selector: 'app-listar-tamanhos',
  templateUrl: './listar-tamanhos.component.html',
  styleUrls: ['./listar-tamanhos.component.scss']
})
export class ListarTamanhosComponent extends BaseListCrud implements OnInit {

  constructor(
    tamanhoController: TamanhoController,
    injector: Injector
  ) {
    super(tamanhoController, injector);
   }

  ngOnInit() {
    this.getAll();
  }

}
