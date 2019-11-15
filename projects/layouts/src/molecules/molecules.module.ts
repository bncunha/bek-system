import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AtomsModule } from '../atoms/atoms.module';
import { TituloPaginaComponent } from './titulo-pagina/titulo-pagina.component';
import { TabelaModule } from './tabela/tabela.module';
import { FormInputComponent } from './form-input/form-input.component';

@NgModule({
  declarations: [TituloPaginaComponent, FormInputComponent],
  imports: [
    CommonModule,
    AtomsModule,
    TabelaModule
  ],
  exports: [TituloPaginaComponent, TabelaModule, FormInputComponent]
})
export class MoleculesModule { }
