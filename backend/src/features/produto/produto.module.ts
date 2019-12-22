import { Module } from '@nestjs/common';
import { ProdutoService } from './produto.service';
import { ProdutoController } from './produto.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Produto } from 'src/entities/Produto.entity';
import { CorService } from '../cor/cor.service';
import { TipoProdutoService } from '../tipo-produto/tipo-produto.service';
import { TamanhoService } from '../tamanho/tamanho.service';
import { ProdutoHasTamanhoService } from '../produto-has-tamanho/produto-has-tamanho.service';
import { CorProduto } from 'src/entities/CorProduto.entity';
import { Tamanho } from 'src/entities/Tamanho.entity';
import { ProdutoHasTamanho } from 'src/entities/Produto_has_Tamanho.entity';
import { TipoProduto } from 'src/entities/TipoProduto.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Produto, CorProduto, Tamanho, ProdutoHasTamanho, TipoProduto])],
  controllers: [ProdutoController],
  providers: [
    ProdutoService,
    CorService,
    TipoProdutoService,
    TamanhoService,
    ProdutoHasTamanhoService
  ]
})
export class ProdutoModule {}
