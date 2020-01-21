import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutsModule } from 'projects/layouts/src/public-api';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ], exports: [
    LayoutsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule
  ]
})
export class CoreModule { }
