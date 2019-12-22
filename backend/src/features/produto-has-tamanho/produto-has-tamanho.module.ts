import { Module } from '@nestjs/common';
import { ProdutoHasTamanhoController } from './produto-has-tamanho.controller';
import { ProdutoHasTamanhoService } from './produto-has-tamanho.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProdutoHasTamanho } from 'src/entities/Produto_has_Tamanho.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ProdutoHasTamanho])],
  controllers: [ProdutoHasTamanhoController],
  providers: [ProdutoHasTamanhoService]
})
export class ProdutoHasTamanhoModule {}
