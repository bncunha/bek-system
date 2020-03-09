import { Component, OnInit } from '@angular/core';
import { ClienteControllerService } from '../controllers/cliente-controller.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-listar-clientes',
  templateUrl: './listar-clientes.component.html',
  styleUrls: ['./listar-clientes.component.scss']
})
export class ListarClientesComponent implements OnInit {
  models: Observable<any>
  constructor(private clienteController: ClienteControllerService) { }

  ngOnInit() {
    this.models = this.clienteController.getAll();
  }

  deletar(id) {
    this.clienteController.delete(id).subscribe(r => this.models = this.clienteController.getAll());
  }

}
