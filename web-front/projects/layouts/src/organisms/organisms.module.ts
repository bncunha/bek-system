import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoleculesModule } from '../molecules/molecules.module';
import { AtomsModule } from '../atoms/atoms.module';
import { SidebarComponent } from './sidebar/sidebar.component';
import { PageContentComponent } from './page-content/page-content.component';
import { RouterModule } from '@angular/router';
import { FormComponent } from './form/form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FiltersComponent } from './filters/filters.component';

@NgModule({
  declarations: [SidebarComponent, PageContentComponent, FormComponent, FiltersComponent],
  imports: [
    CommonModule,
    AtomsModule,
    MoleculesModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [SidebarComponent, PageContentComponent, FormComponent, FiltersComponent]
})
export class OrganismsModule { }
