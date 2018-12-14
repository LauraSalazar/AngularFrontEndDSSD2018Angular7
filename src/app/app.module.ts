import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpParams } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TipoproductoService } from './tipoproducto.service';
import { TipoproductoComponent } from './tipoproducto/tipoproducto.component';
//Rutas
import { app_routing } from './app.reoutes';
import { ProductoComponent } from './producto/producto.component';
import { ProductoService } from './producto.service';
import { FormsModule } from '@angular/forms';
import { BonitaserviceService } from './bonitaservice.service';
import { httpInterceptorProviders } from './interceptorIndex';
import { CookieService } from 'ngx-cookie-service';
import { PrincipalComponent } from './principal/principal.component';



@NgModule({
  declarations: [
    AppComponent,
    TipoproductoComponent,
    ProductoComponent,
    PrincipalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    app_routing
  ],
  providers: [TipoproductoService,ProductoService,BonitaserviceService,httpInterceptorProviders,CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
