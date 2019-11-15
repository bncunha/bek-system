import { Injectable } from '@angular/core';
import { BaseController } from 'src/core/classes/base-controller';
import { CategoriaService } from 'src/services/categoria.service';

@Injectable()
export class CategoriaControllerService extends BaseController {

  constructor(private categoriaService: CategoriaService) {
    super(categoriaService);
  }

}
