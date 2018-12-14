import { RouterModule, Routes } from '@angular/router';
import { TipoproductoComponent } from './tipoproducto/tipoproducto.component';
import { ProductoComponent } from './producto/producto.component';
import { AppComponent } from './app.component';
import { PrincipalComponent } from './principal/principal.component';

const app_routes: Routes = [
  { path: 'tipoproducto/:id/:idProceso', component: TipoproductoComponent},
  { path: 'producto', component: ProductoComponent},
  { path: 'principal', component: PrincipalComponent}


];

export const app_routing = RouterModule.forRoot(app_routes );
