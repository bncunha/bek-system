import { Module } from '@nestjs/common';
import { CorController } from './cor.controller';
import { CorService } from './cor.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CorProduto } from 'src/entities/CorProduto.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CorProduto])],
  controllers: [CorController],
  providers: [CorService]
})
export class CorModule {}
