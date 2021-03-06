import { Module } from '@nestjs/common';
import { ProdutoModule } from './produto/produto.module';
import { TamanhoModule } from './tamanho/tamanho.module';
import { TipoProdutoModule } from './tipo-produto/tipo-produto.module';
import { CorModule } from './cor/cor.module';
import { ProdutoHasTamanhoModule } from './produto-has-tamanho/produto-has-tamanho.module';
import { MovimentoEstoqueModule } from './movimento-estoque/movimento-estoque.module';
import { MovimentoHasProdutotamanhoModule } from './movimento-has-produtotamanho/movimento-has-produtotamanho.module';

@Module({
    imports: [
        ProdutoModule,
        TamanhoModule,
        TipoProdutoModule,
        CorModule,
        ProdutoHasTamanhoModule,
        MovimentoEstoqueModule,
        MovimentoHasProdutotamanhoModule
    ],
    exports: [
        ProdutoModule,
        TamanhoModule,
        TipoProdutoModule,
        CorModule
    ]
})
export class FeaturesModule {}
