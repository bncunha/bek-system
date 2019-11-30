import { Injectable } from '@nestjs/common';
import { EnvironmentConfigService } from './configs/services/environment-config/environment-config.service';

@Injectable()
export class AppService {

  constructor(envConfig: EnvironmentConfigService) {
  

  }
  getHello(): string {
    return 'Hello World!!';
  }
}
