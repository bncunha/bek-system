import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AtomsModule } from '../atoms/atoms.module';
import { TituloPaginaComponent } from './titulo-pagina/titulo-pagina.component';
import { TabelaModule } from './tabela/tabela.module';

@NgModule({
  declarations: [TituloPaginaComponent],
  imports: [
    CommonModule,
    AtomsModule,
    TabelaModule
  ],
  exports: [TituloPaginaComponent, TabelaModule]
})
export class MoleculesModule { }
