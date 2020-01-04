import { Injectable } from '@nestjs/common';
import * as dotenv from 'dotenv';
import * as fs from 'fs';

@Injectable()
export class EnvironmentConfigService {
    private readonly envConfig: Record<string, string>;

    constructor(filePath: string) {
        this.envConfig = dotenv.parse(fs.readFileSync('src/environments/' + filePath))
    }

    get(key: string): any {
        return this.envConfig[key];
    }

}
