import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TituloUmComponent } from './titulo-um/titulo-um.component';
import { CardComponent } from './card/card.component';
import { TituloDoisComponent } from './titulo-dois/titulo-dois.component';
import { BtnPrimarioComponent } from './btn-primario/btn-primario.component';
import { InputComponent } from './input/input.component';
import { LabelComponent } from './label/label.component';

@NgModule({
  declarations: [TituloUmComponent, CardComponent, TituloDoisComponent, BtnPrimarioComponent, InputComponent, LabelComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [TituloUmComponent, CardComponent, TituloDoisComponent, BtnPrimarioComponent, InputComponent, LabelComponent]
})
export class AtomsModule { }
