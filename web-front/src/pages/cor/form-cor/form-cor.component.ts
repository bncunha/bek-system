import { Component, OnInit, Injector } from '@angular/core';
import { BaseFormCrud } from 'src/core/classes/base-form-crud';
import { CorController } from '../controllers/cor-controller.service';
import { CrudCorDTOForm } from '../dto/CrudCorDTO.form';

@Component({
  selector: 'app-form-cor',
  templateUrl: './form-cor.component.html',
  styleUrls: ['./form-cor.component.scss']
})
export class FormCorComponent extends BaseFormCrud implements OnInit {

  constructor(
    controller: CorController,
    injector: Injector
  ) {
    super(controller, injector);
   }

  ngOnInit() {
    this.init(new CrudCorDTOForm());
  }

  atualizarCor(cor) {
    this.form.get('hex').patchValue(cor);
    console.log(cor);
  }

}
