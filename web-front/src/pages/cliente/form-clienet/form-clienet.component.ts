import { Component, OnInit, Injector } from '@angular/core';
import { BaseFormCrud } from 'src/core/classes/base-form-crud';
import { ClienteControllerService } from '../controllers/cliente-controller.service';
import { ClienteForm } from '../forms/cliente.form';

@Component({
  selector: 'app-form-clienet',
  templateUrl: './form-clienet.component.html',
  styleUrls: ['./form-clienet.component.scss']
})
export class FormClienetComponent extends BaseFormCrud implements OnInit {

  constructor(clienteController: ClienteControllerService, injector: Injector) { 
    super(clienteController, injector);
  }

  ngOnInit() {
    this.init(new ClienteForm());
  }

}
