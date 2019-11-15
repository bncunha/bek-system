import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AtomsModule } from '../atoms/atoms.module';
import { TituloPaginaComponent } from './titulo-pagina/titulo-pagina.component';

@NgModule({
  declarations: [TituloPaginaComponent],
  imports: [
    CommonModule,
    AtomsModule
  ],
  exports: [TituloPaginaComponent]
})
export class MoleculesModule { }
