import { Component, OnInit, Injector } from '@angular/core';
import { BaseListCrud } from 'src/core/classes/base-list.crud';
import { ProdutoControllerService } from '../controllers/produto-controller.service';
import { Observable } from 'rxjs';
import { TipoProduto } from 'src/models/TipoProduto.model';
import { TipoProdutoService } from 'src/services/tipo-produto.service';
import { FormGroup } from '@angular/forms';
import { EstoqueFiltersForm } from '../forms/EstoqueFilters.form';
import { EstoqueFilters } from '../forms/EstoqueFilters';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-listar-estoque',
  templateUrl: './listar-estoque.component.html',
  styleUrls: ['./listar-estoque.component.scss'],
})
export class ListarEstoqueComponent extends BaseListCrud implements OnInit {

  tiposProduto: Observable<TipoProduto[]>;
  formFilters: FormGroup;

  constructor(controller: ProdutoControllerService, 
    private tipoProdutoService: TipoProdutoService, 
    private router: Router,
    private route: ActivatedRoute,
    injector: Injector) {
    super(controller, injector);
   }

  ngOnInit() {
    this.tiposProduto = this.tipoProdutoService.getAll();
    this.route.queryParams.subscribe(params => {
      this.getAll(params);
      this.formFilters = new EstoqueFiltersForm().createForm(new EstoqueFilters(params));
    });
  }

  filtrar(filtros) {
    this.router.navigate(['/estoque'], {queryParams: filtros})
  }

}
