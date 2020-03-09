import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClienteRoutingModule } from './cliente-routing.module';
import { CoreModule } from 'src/core/core.module';
import { ListarClientesComponent } from './listar-clientes/listar-clientes.component';
import { FormClienetComponent } from './form-clienet/form-clienet.component';
import { ClienteControllerService } from './controllers/cliente-controller.service';

@NgModule({
  declarations: [ListarClientesComponent, FormClienetComponent],
  imports: [
    CommonModule,
    CoreModule,
    ClienteRoutingModule
  ], providers: [
    ClienteControllerService
  ]
})
export class ClienteModule { }
