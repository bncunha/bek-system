import { Injectable } from '@angular/core';
import { BaseController } from 'src/core/classes/base-controller';
import { TipoProdutoService } from 'src/services/tipo-produto.service';

@Injectable()
export class TipoProdutoControllerService extends BaseController {

  constructor(tipoProdutoService: TipoProdutoService) { 
    super(tipoProdutoService);
  }
}
