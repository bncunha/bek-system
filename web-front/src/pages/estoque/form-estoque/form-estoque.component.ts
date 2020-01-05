import { Component, OnInit, Injector } from '@angular/core';
import { BaseFormCrud } from 'src/core/classes/base-form-crud';
import { ProdutoControllerService } from '../controllers/produto-controller.service';
import { EstoqueForm } from '../forms/estoque.form';
import { Observable } from 'rxjs';
import { TipoProdutoControllerService } from 'src/pages/tipo-produto/controllers/tipo-produto-controller.service';
import { tap } from 'rxjs/operators';
import { CorService } from 'src/services/cor.service';
import { FormArray } from '@angular/forms';

@Component({
  selector: 'app-form-estoque',
  templateUrl: './form-estoque.component.html',
  styleUrls: ['./form-estoque.component.scss'],
  providers: [TipoProdutoControllerService]
})
export class FormEstoqueComponent extends BaseFormCrud implements OnInit {

  tiposProduto: any;
  cores: Observable<any>;
  constructor(
    private tipoProdutoService: TipoProdutoControllerService,
    private corService: CorService,
    controller: ProdutoControllerService,
    injector: Injector
  ) { 
    super(controller, injector);
  }

  ngOnInit() {
    this.init(new EstoqueForm());
    this.tipoProdutoService.getAll().subscribe(r => this.tiposProduto = r);
    this.cores = this.corService.getAll().pipe(tap(r => console.log(r)));
  }

  criarTamanhos(event) {
    const idTipoProduto = event.target.value;
    new EstoqueForm().createQtdTamanhoArray(this.tiposProduto.find(t => t.idTipoProduto == idTipoProduto).tamanhos, this.form);
  }

  getTamanhoLabel(idTamanho) {
    if (!this.tiposProduto) return;
    const idTipoProduto = this.form.value.tipoProduto;
    const tamanhos = this.tiposProduto.find(t => t.idTipoProduto == idTipoProduto).tamanhos;
    return tamanhos.find(t => t.idTamanho == idTamanho).descricao;
  }

  get qtdTamanhoControls() {
    const qtdTamanho = <FormArray> this.form.get('qtdTamanho')
    return qtdTamanho.controls;
  }


}
