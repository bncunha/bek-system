import { Injectable } from '@angular/core';
import { BaseController } from 'src/core/classes/base-controller';
import { TamanhoService } from 'src/services/tamanho.service';
import { CorService } from 'src/services/cor.service';

@Injectable()
export class CorController extends BaseController {

  constructor(
    service: CorService
  ) { 
    super(service);
  }
}
