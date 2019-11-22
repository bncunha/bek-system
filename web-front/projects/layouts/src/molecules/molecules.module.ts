import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AtomsModule } from '../atoms/atoms.module';
import { TituloPaginaComponent } from './titulo-pagina/titulo-pagina.component';
import { TabelaModule } from './tabela/tabela.module';
import { FormInputComponent } from './form-input/form-input.component';
import { FormSelectComponent } from './form-select/form-select.component';

@NgModule({
  declarations: [
    TituloPaginaComponent,
    FormInputComponent,
    FormSelectComponent
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
    FormSelectComponent
  ]
})
export class MoleculesModule { }
