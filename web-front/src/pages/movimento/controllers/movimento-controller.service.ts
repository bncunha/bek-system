import { Injectable } from '@angular/core';
import { BaseController } from 'src/core/classes/base-controller';
import { MovimentoService } from 'src/services/movimento.service';

@Injectable()
export class MovimentoController extends BaseController {

  constructor(
    service: MovimentoService
  ) {
    super(service);
  }
}
