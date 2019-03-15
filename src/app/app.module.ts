import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AltausuarioComponent } from './altausuario/altausuario.component';
import { AdministradorviewComponent } from './administradorview/administradorview.component';
import { UsuarioviewComponent } from './usuarioview/usuarioview.component';
import { routing } from './app.router';
import { FormsModule } from '@angular/forms';
import { ListadousuariosComponent } from './listadousuarios/listadousuarios.component';
import { LoggerService } from './logger.service';
import { UsuariomockserviceService } from './usuariomockservice.service';
import { BicicletaserviceService } from './bicicletaservice.service';
import { UsuarioserviceService } from './usuarioservice.service';
import { ListadobicicletaComponent } from './listadobicicleta/listadobicicleta.component';
import { AgregarestacionComponent } from './agregarestacion/agregarestacion.component';
import { ListadoestacionesComponent } from './listadoestaciones/listadoestaciones.component';
import { AgregarbicicletaComponent } from './agregarbicicleta/agregarbicicleta.component';
import { DevolverbicicletaComponent } from './devolverbicicleta/devolverbicicleta.component';
import { RetirarbicicletaComponent } from './retirarbicicleta/retirarbicicleta.component';
import { UsuariocreadoComponent } from './usuariocreado/usuariocreado.component';
import { EstacioncreadaComponent } from './estacioncreada/estacioncreada.component';
import { EstacionserviceService } from './estacionservice.service';
import { BicicletaagregadaComponent } from './bicicletaagregada/bicicletaagregada.component';
import { HostService } from './host.service';
import { httpInterceptorProviders } from './interceptorIndex';
import { NgxWebstorageModule } from 'ngx-webstorage';
import { NoallowedComponent } from './noallowed/noallowed.component';
import { LoginService } from './login.service';
import { LoginComponent } from './login/login.component';
import { ModificarestacionComponent } from './modificarestacion/modificarestacion.component';
import { BicicletaprestadaComponent } from './bicicletaprestada/bicicletaprestada.component';
import { PrestamoserviceService } from './prestamoservice.service';

@NgModule({
  declarations: [
    AppComponent,
    AltausuarioComponent,
    AdministradorviewComponent,
    UsuarioviewComponent,
    ListadousuariosComponent,
    ListadobicicletaComponent,
    AgregarestacionComponent,
    ListadoestacionesComponent,
    AgregarbicicletaComponent,
    DevolverbicicletaComponent,
    RetirarbicicletaComponent,
    UsuariocreadoComponent,
    AgregarestacionComponent,
    EstacioncreadaComponent,
    ListadobicicletaComponent,
    BicicletaagregadaComponent,
    NoallowedComponent,
    LoginComponent,
    ModificarestacionComponent,
    BicicletaprestadaComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    HttpModule,
    HttpClientModule,
    NgxWebstorageModule.forRoot()
  ],
  providers: [
              LoggerService,
    UsuariomockserviceService,
    UsuarioserviceService,
    EstacionserviceService,
    BicicletaserviceService,
    HostService,
    httpInterceptorProviders,
    LoginService,
    PrestamoserviceService,
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
