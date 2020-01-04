import { Injectable } from '@nestjs/common';
import { TypeOrmOptionsFactory, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { EnvironmentConfigService } from '../environment-config/environment-config.service';

@Injectable()
export class TypeormConfigService implements TypeOrmOptionsFactory {
    constructor(private envConfig: EnvironmentConfigService) {

    }

    createTypeOrmOptions(): TypeOrmModuleOptions {
        return {
            type: 'mysql',
            host: this.envConfig.get('DB_HOST'),
            port: this.envConfig.get('DB_PORT'),
            username: this.envConfig.get('DB_USERNAME'),
            password: this.envConfig.get('DB_PASS'),
            database: this.envConfig.get('DB_NAME'),
            entities: [this.envConfig.get('ENTITIES_PATH')],
            synchronize: true,
        };
    }
}