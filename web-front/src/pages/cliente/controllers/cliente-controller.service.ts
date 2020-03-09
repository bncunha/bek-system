import { Injectable, Injector } from '@angular/core';
import { BaseController } from 'src/core/classes/base-controller';
import { ClienteService } from 'src/services/cliente.service';

@Injectable()
export class ClienteControllerService extends BaseController {

  constructor(clienteService: ClienteService) { 
    super(clienteService);
  }
}
