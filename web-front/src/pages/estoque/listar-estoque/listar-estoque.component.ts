import { Component, OnInit, Injector, ViewChild } from '@angular/core';
import { BaseListCrud } from 'src/core/classes/base-list.crud';
import { ProdutoControllerService } from '../controllers/produto-controller.service';
import { Observable } from 'rxjs';
import { TipoProduto } from 'src/models/TipoProduto.model';
import { TipoProdutoService } from 'src/services/tipo-produto.service';
import { FormGroup } from '@angular/forms';
import { EstoqueFiltersForm } from '../forms/EstoqueFilters.form';
import { EstoqueFilters } from '../forms/EstoqueFilters';
import { Router, ActivatedRoute } from '@angular/router';
import { Produto } from 'src/models/Produto.model';
import { ModalComponent } from 'projects/layouts/src/atoms/modal/modal.component';
import { TabelaTamanhoQuantidadeComponent } from 'src/pages/tamanho/tabela-tamanho-quantidade/tabela-tamanho-quantidade.component';
import { QuantidadeTamanho } from 'src/pages/tamanho/dto/QuantidadeTamanho';

@Component({
  selector: 'app-listar-estoque',
  templateUrl: './listar-estoque.component.html',
  styleUrls: ['./listar-estoque.component.scss'],
})
export class ListarEstoqueComponent extends BaseListCrud implements OnInit {
  @ViewChild('modalQtdTamanho') modalQtdTamanho: ModalComponent;
  @ViewChild(TabelaTamanhoQuantidadeComponent) tabelaQtdTamanho: TabelaTamanhoQuantidadeComponent;

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

  getCores(produto: Produto) {
    return [
      {nome: produto.cor ? produto.cor.nome : null, hex: produto.cor ? produto.cor.hex : null },
      {nome: produto.cor2 ? produto.cor2.nome : null, hex: produto.cor2 ? produto.cor2.hex : null },
      {nome: produto.cor3 ? produto.cor3.nome : null, hex: produto.cor3 ? produto.cor3.hex : null }
    ].filter(cor => cor.nome);
  }

  visualizarTamanhos(item: Produto) {
    this.modalQtdTamanho.open();
    this.tabelaQtdTamanho.qtdTamanhos = item.produtoTamanho.map(pt => new QuantidadeTamanho(pt.tamanho.descricao, pt.quantidade));
  }
}
