import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CorRoutingModule } from './cor-routing.module';
import { ListarCoresComponent } from './listar-cores/listar-cores.component';
import { FormCorComponent } from './form-cor/form-cor.component';
import { CoreModule } from 'src/core/core.module';
import { CorController } from './controllers/cor-controller.service';

@NgModule({
  declarations: [ListarCoresComponent, FormCorComponent],
  imports: [
    CommonModule,
    CorRoutingModule,
    CoreModule
  ], providers: [
    CorController
  ]
})
export class CorModule { }
