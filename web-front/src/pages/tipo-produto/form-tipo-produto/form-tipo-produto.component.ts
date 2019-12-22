import { Component, OnInit, Injector } from '@angular/core';
import { TipoProduto } from 'src/models/TipoProduto.model';
import { TipoProdutoForm } from '../forms/tipo-produto.form';
import { TipoProdutoService } from 'src/services/tipo-produto.service';
import { Router, ActivatedRoute } from '@angular/router';
import { TipoProdutoControllerService } from '../controllers/tipo-produto-controller.service';
import { TamanhoService } from '../../../services/tamanho.service';
import { BaseFormCrud } from 'src/core/classes/base-form-crud';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-form-tipo-produto',
  templateUrl: './form-tipo-produto.component.html',
  styleUrls: ['./form-tipo-produto.component.scss']
})
export class FormTipoProdutoComponent extends BaseFormCrud implements OnInit {
  model = new TipoProduto();
  tamanhos: Observable<any>;

  constructor(
    private tamanhosService: TamanhoService,
    controller: TipoProdutoControllerService,
    injector: Injector
  ) { 
    super(controller, injector);
  }

  ngOnInit() {
    this.init(new TipoProdutoForm());
    this.tamanhos = this.tamanhosService.getAll();
  }

}
