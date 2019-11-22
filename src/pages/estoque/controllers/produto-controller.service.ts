import { Injectable } from '@angular/core';
import { BaseController } from 'src/core/classes/base-controller';
import { ProdutoService } from 'src/services/produto.service';

@Injectable()
export class ProdutoControllerService extends BaseController {

  constructor(private service: ProdutoService) {
    super(service);
  }

}
