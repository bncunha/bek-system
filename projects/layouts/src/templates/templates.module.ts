import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrganismsModule } from '../organisms/organisms.module';
import { MoleculesModule } from '../molecules/molecules.module';
import { AtomsModule } from '../atoms/atoms.module';
import { PrincipalTemplateComponent } from './principal-template/principal-template.component';

@NgModule({
  declarations: [
    PrincipalTemplateComponent
  ],
  imports: [
    CommonModule,
    OrganismsModule,
    MoleculesModule,
    AtomsModule
  ], exports: [
    PrincipalTemplateComponent
  ]
})
export class TemplatesModule { }
