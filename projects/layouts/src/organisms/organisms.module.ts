import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoleculesModule } from '../molecules/molecules.module';
import { AtomsModule } from '../atoms/atoms.module';
import { SidebarComponent } from './sidebar/sidebar.component';
import { PageContentComponent } from './page-content/page-content.component';

@NgModule({
  declarations: [SidebarComponent, PageContentComponent],
  imports: [
    CommonModule,
    AtomsModule,
    MoleculesModule,
  ],
  exports: [SidebarComponent, PageContentComponent]
})
export class OrganismsModule { }
