import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutsModule } from 'projects/layouts/src/public-api';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ], exports: [
    LayoutsModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class CoreModule { }
