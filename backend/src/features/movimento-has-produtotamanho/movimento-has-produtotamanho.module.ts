import { Module } from '@nestjs/common';
import { MovimentoHasProdutoTamanhoService } from './movimento-has-produtotamanho.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MovimentoHasProdutoTamanho } from 'src/entities/Movimento_has_ProdutoTamanho.entity';

@Module({
    imports: [TypeOrmModule.forFeature([MovimentoHasProdutoTamanho])],
    // controllers: [TipoProdutoController],
    providers: [MovimentoHasProdutoTamanhoService],
    exports: [TypeOrmModule]
})
export class MovimentoHasProdutotamanhoModule {
}
