import { Module } from '@nestjs/common';
import { TipoProdutoController } from './tipo-produto.controller';
import { TipoProdutoService } from './tipo-produto.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TipoProduto } from 'src/entities/TipoProduto.entity';
import { TamanhoService } from '../tamanho/tamanho.service';
import { TamanhoModule } from '../tamanho/tamanho.module';
import { Tamanho } from 'src/entities/Tamanho.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TipoProduto, Tamanho])],
  controllers: [TipoProdutoController],
  providers: [TipoProdutoService, TamanhoService]
})
export class TipoProdutoModule {}
