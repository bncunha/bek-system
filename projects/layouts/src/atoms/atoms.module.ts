import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TituloUmComponent } from './titulo-um/titulo-um.component';
import { CardComponent } from './card/card.component';
import { TituloDoisComponent } from './titulo-dois/titulo-dois.component';
import { BtnPrimarioComponent } from './btn-primario/btn-primario.component';

@NgModule({
  declarations: [TituloUmComponent, CardComponent, TituloDoisComponent, BtnPrimarioComponent],
  imports: [
    CommonModule
  ],
  exports: [TituloUmComponent, CardComponent, TituloDoisComponent, BtnPrimarioComponent]
})
export class AtomsModule { }
