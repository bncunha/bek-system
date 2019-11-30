import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TituloUmComponent } from './titulo-um/titulo-um.component';
import { CardComponent } from './card/card.component';
import { TituloDoisComponent } from './titulo-dois/titulo-dois.component';
import { BtnPrimarioComponent } from './btn-primario/btn-primario.component';
import { InputComponent } from './input/input.component';
import { LabelComponent } from './label/label.component';
import { BtnSecundarioComponent } from './btn-secundario/btn-secundario.component';
import { BtnPerigoComponent } from './btn-perigo/btn-perigo.component';
import { SelectComponent } from './select/select.component';

@NgModule({
  declarations: [TituloUmComponent, CardComponent, TituloDoisComponent, BtnPrimarioComponent, InputComponent, LabelComponent, BtnSecundarioComponent, BtnPerigoComponent, SelectComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [TituloUmComponent, CardComponent, TituloDoisComponent, BtnPrimarioComponent, InputComponent, LabelComponent, BtnSecundarioComponent, BtnPerigoComponent, SelectComponent]
})
export class AtomsModule { }