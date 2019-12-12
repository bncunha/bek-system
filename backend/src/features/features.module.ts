import { Module } from '@nestjs/common';
import { ProdutoModule } from './produto/produto.module';
import { TamanhoModule } from './tamanho/tamanho.module';
import { TipoProdutoModule } from './tipo-produto/tipo-produto.module';
import { CorModule } from './cor/cor.module';

@Module({
    imports: [
        ProdutoModule,
        TamanhoModule,
        TipoProdutoModule,
        CorModule
    ],
    exports: [
        ProdutoModule,
        TamanhoModule,
        TipoProdutoModule,
        CorModule
    ]
})
export class FeaturesModule {}
