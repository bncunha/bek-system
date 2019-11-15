import { Component, OnInit } from '@angular/core';
import { CategoriaControllerService } from '../controllers/categoria-controller.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-listar-categoria',
  templateUrl: './listar-categoria.component.html',
  styleUrls: ['./listar-categoria.component.scss']
})
export class ListarCategoriaComponent implements OnInit {
  categorias: Observable<any>
  constructor(private categoriaController: CategoriaControllerService) { }

  ngOnInit() {
    this.categorias = this.categoriaController.getAll();
  }

  deletar(id) {
    this.categoriaController.delete(id);
  }

}
