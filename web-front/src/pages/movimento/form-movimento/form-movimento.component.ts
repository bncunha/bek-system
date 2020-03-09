import { Component, OnInit, Injector, ViewChild } from '@angular/core';
import { TipoMovimento } from 'src/enums/TIPO_MOVIMENTO.enum';
import { ActivatedRoute } from '@angular/router';
import { BaseFormCrud } from 'src/core/classes/base-form-crud';
import { MovimentoController } from '../controllers/movimento-controller.service';
import { MovimentoDTOForm } from '../dto/MovimentoDTO.form';
import { MovimentoDTO } from '../dto/MovimentoDTO';
import { ModalComponent } from 'projects/layouts/src/atoms/modal/modal.component';
import { Produto } from 'src/models/Produto.model';
import { ProdutoControllerService } from 'src/pages/estoque/controllers/produto-controller.service';
import { FormArray } from '@angular/forms';
import { MovimentoService } from 'src/services/movimento.service';
import { RESPONSE_STATUS } from 'src/core/constants/RESPONSE_STATUS.enum';

@Component({
  selector: 'app-form-movimento',
  templateUrl: './form-movimento.component.html',
  styleUrls: ['./form-movimento.component.scss'],
  providers: [MovimentoController]
})
export class FormMovimentoComponent extends BaseFormCrud implements OnInit {
  @ViewChild('modalProdutos') modalProdutos: ModalComponent;

  tipoMovimento: string;
  produtoSearch: string;
  produtosEncontrados = [];
  produtoSelecionado: Produto;

  constructor(
    controller: MovimentoController,
    private service: MovimentoService,
    private produtoController: ProdutoControllerService,
    injector: Injector,
  ) {
    super(controller, injector);
  }

  ngOnInit() {
    this.tipoMovimento = this.route.snapshot.params.tipoMovimento;
    const newMovimento = new MovimentoDTO();
    newMovimento.data = new Date().toLocaleString();
    newMovimento.tipoMovimento = this.tipoMovimento.toUpperCase() as TipoMovimento;
    this.init(new MovimentoDTOForm(), newMovimento);
    this.form.get('tipoMovimento').disable();
  }

  get pageTitle() {
    switch (this.tipoMovimento) {
      case TipoMovimento.ENTRADA: return 'Nova Entrada';
      case TipoMovimento.SAIDA: return 'Nova Saída';
    }
  }

  buscarProduto() {
    this.produtosEncontrados = [];
    this.limparProduto();
    this.produtoController.getAll({nome:  this.produtoSearch ? this.produtoSearch : ''}).subscribe(r => {
      this.produtosEncontrados = r;
      this.modalProdutos.open();
    });
  }

  limparProduto() {
    this.form.get('idProduto').reset();
    this.produtoSelecionado = null;
  }

  atualizarProduto(produto: Produto) {
    this.modalProdutos.close();
    this.form.get('idProduto').patchValue(produto.idProduto);
    new MovimentoDTOForm().createQtdTamanhoArray(produto.tipoProduto.tamanhos, this.form);
    this.produtoSelecionado = produto;
  }

  keyPress(event) {
    if (event.key === 'Enter') {
      this.buscarProduto();
    }
  }

  get qtdTamanhoControls() {
    const qtdTamanho = this.form.get('quantidadeTamanho') as FormArray;
    return qtdTamanho.controls;
  }

  getTamanhoById(idTamanho) {
    if (!this.produtoSelecionado) { return; }
    return this.produtoSelecionado.tipoProduto.tamanhos.find(t => t.idTamanho === idTamanho);
  }

  getQtdAtualByTamanho(idTamanho) {
    if (!this.produtoSelecionado) { return; }
    const encontrado = this.produtoSelecionado.produtoTamanho.find(pt => pt.idTamanho === idTamanho);
    return encontrado ? encontrado.quantidade : 0;
  }

  async submit() {
    this.validateFormControls(this.form);
    const model = new MovimentoDTOForm().getFormValue(this.form);
    if (this.form.valid) {
      const resp = await (await this.service.insert(model)).toPromise();
      if (resp.status === 200) {
          this.modalService.open(1, this.location.back.bind(this.location), 'Sucesso!', 'Operação realizada com sucesso!');
      } else if (resp.status !== RESPONSE_STATUS.FORMULARIO_INVALIDO) {
          this.modalService.open(2, null, 'Erro!', resp.message);
      }
    }
  }

}
