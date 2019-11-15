import { NgModule } from '@angular/core';
import { LayoutsComponent } from './layouts.component';
import { AtomsModule } from '../atoms/atoms.module';
import { MoleculesModule } from '../molecules/molecules.module';
import { OrganismsModule } from '../organisms/organisms.module';
import { TemplatesModule } from '../templates/templates.module';

@NgModule({
  declarations: [LayoutsComponent],
  imports: [
    AtomsModule,
    MoleculesModule,
    OrganismsModule,
    TemplatesModule
  ],
  exports: [
    AtomsModule,
    MoleculesModule,
    OrganismsModule,
    TemplatesModule
  ]
})
export class LayoutsModule { }
