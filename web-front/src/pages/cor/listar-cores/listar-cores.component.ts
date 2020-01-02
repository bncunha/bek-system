import { Component, OnInit, Injector } from '@angular/core';
import { BaseFormCrud } from 'src/core/classes/base-form-crud';
import { BaseListCrud } from 'src/core/classes/base-list.crud';
import { CorController } from '../controllers/cor-controller.service';

@Component({
  selector: 'app-listar-cores',
  templateUrl: './listar-cores.component.html',
  styleUrls: ['./listar-cores.component.scss']
})
export class ListarCoresComponent extends BaseListCrud implements OnInit {

  constructor(
    controller: CorController,
    injector: Injector
  ) { 
    super(controller, injector)
  }

  ngOnInit() {
    this.getAll();
  }

}
