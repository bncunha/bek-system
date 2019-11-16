import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TipoProdutoControllerService } from '../controllers/tipo-produto-controller.service';

@Component({
  selector: 'app-listar-tipo-produto',
  templateUrl: './listar-tipo-produto.component.html',
  styleUrls: ['./listar-tipo-produto.component.scss']
})
export class ListarTipoProdutoComponent implements OnInit {
  tipos: Observable<any>
  constructor(private tipoProdutoController: TipoProdutoControllerService) { }

  ngOnInit() {
    this.tipos = this.tipoProdutoController.getAll();
  }

  deletar(id) {
    this.tipoProdutoController.delete(id);
  }


}
