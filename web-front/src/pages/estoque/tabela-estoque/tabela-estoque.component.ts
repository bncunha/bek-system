import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Produto } from 'src/models/Produto.model';

@Component({
  selector: 'app-tabela-estoque',
  templateUrl: './tabela-estoque.component.html',
  styleUrls: ['./tabela-estoque.component.scss']
})
export class TabelaEstoqueComponent implements OnInit {
  @Output() deletar = new EventEmitter();
  @Output() visualizarTamanhos = new EventEmitter();
  @Output() selecionar = new EventEmitter();
  @Input() produtos;
  @Input() showButtons = true;
  @Input() simplificado = false;
  @Input() selecionarBtn = false;
  constructor() { }

  ngOnInit() {
  }

  getCores(produto: Produto) {
    return [
      {nome: produto.cor ? produto.cor.nome : null, hex: produto.cor ? produto.cor.hex : null },
      {nome: produto.cor2 ? produto.cor2.nome : null, hex: produto.cor2 ? produto.cor2.hex : null },
      {nome: produto.cor3 ? produto.cor3.nome : null, hex: produto.cor3 ? produto.cor3.hex : null }
    ].filter(cor => cor.nome);
  }

}
