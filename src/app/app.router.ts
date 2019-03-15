/**
 * New typescript file
 */
import { AdministradorviewComponent } from './administradorview/administradorview.component';
import { AltausuarioComponent } from './altausuario/altausuario.component';
import { ListadousuariosComponent } from './listadousuarios/listadousuarios.component';
import { ListadobicicletaComponent } from './listadobicicleta/listadobicicleta.component';
import { UsuariocreadoComponent } from './usuariocreado/usuariocreado.component';
import { UsuarioviewComponent } from './usuarioview/usuarioview.component';
import { AgregarestacionComponent } from './agregarestacion/agregarestacion.component';
import { RouterModule, Routes } from '@angular/router';
import { EstacioncreadaComponent } from './estacioncreada/estacioncreada.component';
import { ListadoestacionesComponent } from './listadoestaciones/listadoestaciones.component';
import { AgregarbicicletaComponent } from './agregarbicicleta/agregarbicicleta.component';
import { BicicletaagregadaComponent } from './bicicletaagregada/bicicletaagregada.component';
import { RetirarbicicletaComponent } from './retirarbicicleta/retirarbicicleta.component';
import { NoallowedComponent } from './noallowed/noallowed.component';
import { LoginComponent } from './login/login.component';
import { DevolverbicicletaComponent } from './devolverbicicleta/devolverbicicleta.component';
import { ModificarestacionComponent } from './modificarestacion/modificarestacion.component';
import { BicicletaprestadaComponent } from './bicicletaprestada/bicicletaprestada.component';

const routes: Routes = [
  { path: 'usuarioview/:id', component: UsuarioviewComponent },
  { path: 'altausuario/:id', component: AltausuarioComponent },
  { path: 'administradorview', component: AdministradorviewComponent },
  { path: 'listadousuarios', component: ListadousuariosComponent },
  { path: 'usuariocreado/:id/:modo', component: UsuariocreadoComponent },
  { path: 'agregarestacion/:id', component: AgregarestacionComponent },
  { path: 'estacioncreada/:id/:modo', component: EstacioncreadaComponent },
  { path: 'listadoestaciones/:id', component: ListadoestacionesComponent },
  { path: 'agregarbicicleta/:id', component: AgregarbicicletaComponent },
  { path: 'listadobicicleta', component: ListadobicicletaComponent },
  { path: 'bicicletaagregada/:id/:modo', component: BicicletaagregadaComponent },
  { path: 'retirarbicicleta/:id', component: RetirarbicicletaComponent },
  { path: 'noallowed', component: NoallowedComponent },
  { path: 'devolverbicicleta/:id', component: DevolverbicicletaComponent },
  { path: 'modificarestacion/:id', component: ModificarestacionComponent },
  { path: 'bicicletaprestada/:idPrestamo', component: BicicletaprestadaComponent },
  { path: 'jyaa_2017_grupo28_final', component: LoginComponent },
];

export const routing = RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'});
