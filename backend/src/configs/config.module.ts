import { Module, Global } from '@nestjs/common';
import { EnvironmentConfigService } from './services/environment-config/environment-config.service';
import { TypeormConfigService } from './services/typeorm-config/typeorm-config.service';

@Global()
@Module({
    imports: [
        
    ],
    providers: [
        {
            provide: EnvironmentConfigService,
            useValue: new EnvironmentConfigService(`${process.env.NODE_ENV || 'development'}.env`),
        },
        TypeormConfigService
    ], exports: [
        EnvironmentConfigService,
        TypeormConfigService
    ]
})
export class ConfigModule { }
