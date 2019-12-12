import { Module } from '@nestjs/common';
import { ProdutoModule } from './produto/produto.module';
import { TamanhoModule } from './tamanho/tamanho.module';
import { TipoProdutoModule } from './tipo-produto/tipo-produto.module';

@Module({
    imports: [
        ProdutoModule,
        TamanhoModule,
        TipoProdutoModule
    ],
    exports: [
        ProdutoModule,
        TamanhoModule,
        TipoProdutoModule
    ]
})
export class FeaturesModule {}
