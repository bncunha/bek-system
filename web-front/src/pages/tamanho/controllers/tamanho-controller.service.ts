import { Injectable } from '@angular/core';
import { BaseController } from 'src/core/classes/base-controller';
import { TamanhoService } from 'src/services/tamanho.service';

@Injectable()
export class TamanhoController extends BaseController {

  constructor(
    tamanhoService: TamanhoService
  ) { 
    super(tamanhoService);
  }
}
