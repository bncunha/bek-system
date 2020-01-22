import { Module } from '@nestjs/common';
import { MovimentoEstoqueService } from './movimento-estoque.service';
import { MovimentoEstoqueController } from './movimento-estoque.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MovimentoEstoque } from 'src/entities/MovimentoEstoque.entity';
import { ProdutoService } from '../produto/produto.service';
import { Produto } from 'src/entities/Produto.entity';
import { ProdutoModule } from '../produto/produto.module';
import { CorService } from '../cor/cor.service';
import { TipoProdutoService } from '../tipo-produto/tipo-produto.service';
import { TamanhoService } from '../tamanho/tamanho.service';
import { ProdutoHasTamanhoService } from '../produto-has-tamanho/produto-has-tamanho.service';
import { MovimentoHasProdutoTamanhoService } from '../movimento-has-produtotamanho/movimento-has-produtotamanho.service';
import { MovimentoHasProdutotamanhoModule } from '../movimento-has-produtotamanho/movimento-has-produtotamanho.module';

@Module({
  imports: [TypeOrmModule.forFeature([MovimentoEstoque]), ProdutoModule, MovimentoHasProdutotamanhoModule],
  controllers: [MovimentoEstoqueController],
  providers: [
    MovimentoEstoqueService,
    ProdutoService,
    CorService,
    TipoProdutoService,
    TamanhoService,
    ProdutoHasTamanhoService,
    MovimentoHasProdutoTamanhoService
  ]
})
export class MovimentoEstoqueModule {}
