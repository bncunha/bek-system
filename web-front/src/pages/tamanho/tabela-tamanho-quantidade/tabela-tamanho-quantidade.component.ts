import { Component, OnInit, Input } from '@angular/core';
import { QuantidadeTamanho } from '../dto/QuantidadeTamanho';

@Component({
  selector: 'app-tabela-tamanho-quantidade',
  templateUrl: './tabela-tamanho-quantidade.component.html',
  styleUrls: ['./tabela-tamanho-quantidade.component.scss']
})
export class TabelaTamanhoQuantidadeComponent implements OnInit {
  @Input() qtdTamanhos:  QuantidadeTamanho[];
  constructor() { }

  ngOnInit() {
  }

}
