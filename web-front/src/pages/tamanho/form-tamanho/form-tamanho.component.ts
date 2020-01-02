import { Component, OnInit, Injector } from '@angular/core';
import { BaseFormCrud } from 'src/core/classes/base-form-crud';
import { TamanhoController } from '../controllers/tamanho-controller.service';
import { CrudTamanhoDTOForm } from '../dto/CrudTamanhoDTO.form';

@Component({
  selector: 'app-form-tamanho',
  templateUrl: './form-tamanho.component.html',
  styleUrls: ['./form-tamanho.component.scss']
})
export class FormTamanhoComponent extends BaseFormCrud implements OnInit {

  constructor(
    controller: TamanhoController,
    injector: Injector
  ) {
    super(controller, injector);
   }

  ngOnInit() {
    this.init(new CrudTamanhoDTOForm());
  }

}
