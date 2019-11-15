import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoleculesModule } from '../molecules/molecules.module';
import { AtomsModule } from '../atoms/atoms.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AtomsModule,
    MoleculesModule
  ]
})
export class OrganismsModule { }
