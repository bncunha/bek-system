import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from './configs/config.module';
import { ProdutoModule } from './features/produto/produto.module';
import { TypeormConfigService } from './configs/services/typeorm-config/typeorm-config.service';
import { FeaturesModule } from './features/features.module';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useExisting: TypeormConfigService,
    }),
    ConfigModule,
    FeaturesModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
