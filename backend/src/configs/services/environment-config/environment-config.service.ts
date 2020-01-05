import { Injectable } from '@nestjs/common';
import * as dotenv from 'dotenv';
import * as fs from 'fs';

@Injectable()
export class EnvironmentConfigService {
    private readonly envConfig: Record<string, string>;

    constructor(filePath: string) {
        const root = filePath.indexOf('prod') >= 0 ? 'environments/' : 'dist/environments/'
        this.envConfig = JSON.parse(fs.readFileSync(root + filePath).toString());
    }

    get(key: string): any {
        return this.envConfig[key];
    }

}
