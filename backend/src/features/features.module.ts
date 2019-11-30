import { Module } from '@nestjs/common';
import { ProdutoModule } from './produto/produto.module';
import { TamanhoModule } from './tamanho/tamanho.module';

@Module({
    imports: [
        ProdutoModule,
        TamanhoModule
    ],
    exports: [
        ProdutoModule,
        TamanhoModule
    ]
})
export class FeaturesModule {}
