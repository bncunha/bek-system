import { Component, OnInit, Injector } from '@angular/core';
import { BaseFormCrud } from 'src/core/classes/base-form-crud';
import { ProdutoControllerService } from '../controllers/produto-controller.service';
import { EstoqueForm } from '../forms/estoque.form';
import { Observable } from 'rxjs';
import { TipoProdutoControllerService } from 'src/pages/tipo-produto/controllers/tipo-produto-controller.service';

@Component({
  selector: 'app-form-estoque',
  templateUrl: './form-estoque.component.html',
  styleUrls: ['./form-estoque.component.scss'],
  providers: [TipoProdutoControllerService]
})
export class FormEstoqueComponent extends BaseFormCrud implements OnInit {

  tiposProduto: Observable<any>;
  constructor(
    private tipoProdutoService: TipoProdutoControllerService,
    controller: ProdutoControllerService,
    injector: Injector
  ) { 
    super(controller, injector);
  }

  ngOnInit() {
    this.init(new EstoqueForm());
    this.tiposProduto = this.tipoProdutoService.getAll();
  }



}
