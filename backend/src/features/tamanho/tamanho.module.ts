import { Module } from '@nestjs/common';
import { TamanhoController } from './tamanho.controller';
import { TamanhoService } from './tamanho.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Tamanho } from 'src/entities/Tamanho.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Tamanho])],
  controllers: [TamanhoController],
  providers: [TamanhoService]
})
export class TamanhoModule {}
