import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutsModule } from 'projects/layouts/src/public-api';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    LayoutsModule
  ], exports: [
    LayoutsModule
  ]
})
export class CoreModule { }
