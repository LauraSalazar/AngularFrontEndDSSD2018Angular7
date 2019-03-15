import { Injectable } from '@angular/core';
import { Bicicleta } from './bicicleta';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { HostService } from './host.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DevolverBicicleta } from './DevolverBicicleta';
import { SessionStorageService } from 'ngx-webstorage';

@Injectable()
export class BicicletaserviceService {
 private urlAgregar = this.host.host + '/Bicicleta/create';
  private urlBicicletas = this.host.host + '/Bicicleta/listadoBicicletas';
  private urlBicicletasLibres = this.host.host + '/Bicicleta/listadoBicicletasLibres';
  private urlBicicleta = this.host.host + '/Bicicleta/';
  private urlBicicletasLibresOrdenUbicacion = this.host.host + '/Bicicleta/listadoBicicletasLibresOrdenUbicacion';
  private urlBicicletaOrdenUbicacion = this.host.host + '/Bicicleta/listadoBicicletasOrdenUbicacion';

  private urlBicicletasLibresOrdenEstado = this.host.host + '/Bicicleta/listadoBicicletasLibresOrdenEstado';
  private urlBicicletaOrdenEstado = this.host.host + '/Bicicleta/listadoBicicletasOrdenEstado';
  private urlBicicletasLibresOrdenNumeroCuadro = this.host.host + '/Bicicleta/listadoBicicletasLibresOrdenNumeroCuadro';
  private urlBicicletaOrdenNumeroCuadro = this.host.host + '/Bicicleta/listadoBicicletasOrdenNumeroCuadro';
  private urlModificar = this.host.host + '/Bicicleta/modificar';

 modificarBicicleta(bici: Bicicleta): Observable<Bicicleta> {

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'my-auth-token'
      })
    };
    console.log('Entro en agregarBicicleta: ' + JSON.stringify(bici));

    return this.http.post<Bicicleta>(this.urlModificar,  bici, httpOptions);
       // console.log('Este es el valor del id generado desde web service' + res.json()),

  }

  agregarBicicleta(bici: Bicicleta): Observable<Bicicleta> {

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'my-auth-token'
      })
    };
    console.log('Entro en agregarBicicleta: ' + JSON.stringify(bici));

    return this.http.post<Bicicleta>(this.urlAgregar,  bici, httpOptions);
       // console.log('Este es el valor del id generado desde web service' + res.json()),

  }



  getBicicletas(): Observable<Bicicleta[]> {
    console.log('Esta es la categoria desde getBicicletas ' + this.localSt.retrieve('categoria'));
    if (this.localSt.retrieve('categoria') === 1) {
        console.log('Pido bicicletas libres');
        return this.http.get<Bicicleta[]>(this.urlBicicletasLibres);
    } else {
      return this.http.get<Bicicleta[]>(this.urlBicicletas);
    }
    }

  constructor(private http: HttpClient, private route: Router, private host: HostService, private localSt: SessionStorageService) {

  }

  handleError(error: any) {
    const msg = (error.message) ? error.message : 'Error desconocido';
    console.error(msg);
    return Observable.throw(msg);
  }


  getBicicleta(id: number): Observable<Bicicleta> {
        console.log('Entro en getBicicleta de Bicicleta Service' + id);
        const url = this.urlBicicleta + id;
        console.log('Este es el valor del url del get Bicicleta: ' + url);
        return this.http.get<Bicicleta>(
             url);
  }

  ordenarPorUbicacion(): Observable<Bicicleta[]> {

    console.log('Esta es la categoria desde getBicicletas ' + this.localSt.retrieve('categoria'));
    if (this.localSt.retrieve('categoria') === 1) {
        console.log('Pido bicicletas libres');
        return this.http.get<Bicicleta[]>(this.urlBicicletasLibresOrdenUbicacion);
    } else {
      return this.http.get<Bicicleta[]>(this.urlBicicletaOrdenUbicacion
        );
    }
  }

  ordenarPorEstado(): Observable<Bicicleta[]> {

    console.log('Esta es la categoria desde getBicicletas ' + this.localSt.retrieve('categoria'));
    if (this.localSt.retrieve('categoria') === 1) {
        console.log('Pido bicicletas libres');
        return this.http.get<Bicicleta[]>(this.urlBicicletasLibresOrdenEstado);
    } else {
      return this.http.get<Bicicleta[]>(this.urlBicicletaOrdenEstado
        );
    }
  }

  ordenarPorNumeroCuadro(): Observable<Bicicleta[]> {

    console.log('Esta es la categoria desde getBicicletas ' + this.localSt.retrieve('categoria'));
    if (this.localSt.retrieve('categoria') === 1) {
        console.log('Pido bicicletas libres');
        return this.http.get<Bicicleta[]>(this.urlBicicletasLibresOrdenNumeroCuadro);
    } else {
      return this.http.get<Bicicleta[]>(this.urlBicicletaOrdenNumeroCuadro);
    }
  }
}
