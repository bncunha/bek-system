import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AtomsModule } from '../atoms/atoms.module';
import { TituloPaginaComponent } from './titulo-pagina/titulo-pagina.component';
import { TabelaModule } from './tabela/tabela.module';
import { FormInputComponent } from './form-input/form-input.component';
import { FormSelectComponent } from './form-select/form-select.component';
import { ModalResponseComponent } from './modal-response/modal-response.component';

@NgModule({
  declarations: [
    TituloPaginaComponent,
    FormInputComponent,
    FormSelectComponent,
    ModalResponseComponent
  ],
  imports: [
    CommonModule,
    AtomsModule,
    TabelaModule
  ],
  exports: [
    TituloPaginaComponent,
    TabelaModule,
    FormInputComponent,
    FormSelectComponent,
    ModalResponseComponent
  ]
})
export class MoleculesModule { }
