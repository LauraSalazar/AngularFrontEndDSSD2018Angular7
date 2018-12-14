import { Component, OnInit } from '@angular/core';
import { TipoProducto } from '../TipoProducto';
import { TipoproductoService } from '../tipoproducto.service';
import { Resolve, ActivatedRouteSnapshot, RouterState, RouterStateSnapshot, Router, ActivatedRoute, ParamMap, Params, NavigationEnd } from '@angular/router';
import { BonitaserviceService } from '../bonitaservice.service';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {
  title = 'Venta On line';

   tipoproductos: TipoProducto[] ;
   idProceso: string;
   termino1: string = 'false';
   constructor(private route: ActivatedRoute, private productoService: TipoproductoService, private router: Router, private bonitaService: BonitaserviceService) {

   }

  ngOnInit(){

  //console.log(this.route.queryParams['id']);

  console.log(this.route);

  this.productoService.getTipoProductos()
  .subscribe(data => this.tipoproductos = data);


  this.router.events.subscribe((e) => {
    if (e instanceof NavigationEnd) {
console.log(e.url);
this.idProceso = e.url;
    }
  });


  }

   initialize() {

   }
   onSelect(tipoproducto) {

     console.log('valor de id procesos antes de llamar a navigate' + this.idProceso)
     let i;
     let miID = '';
    for(i=0; i<this.idProceso.length; i++){
      if (i>=14 && i<=32){
        miID = miID+(this.idProceso.charAt(i));

      }
    }
    console.log('miID ' + miID);
    console.log('entro en iniciar proceso de bonita'  + miID);
     console.log('valor del id antes de llamar al iniciar proceso ' + miID);
     this.router.navigate(['tipoproducto',tipoproducto.id,miID]);

     //this.router.navigate(['bonita']);
     this.termino1 = 'true';

   }
   termino(){
     return (this.termino1 === 'true');
   }


}
