import { Injectable } from '@angular/core';
import { Bicicleta } from './bicicleta';
import { routing } from './app.router';
import {Http, Response, RequestOptions, Headers} from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { HostService } from './host.service';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { DevolverBicicleta } from './DevolverBicicleta';
import { SessionStorageService } from 'ngx-webstorage';

@Injectable()
export class BicicletaserviceService {
 private urlAgregar = this.host.host + '/LaPlataEnBici/rest/Bicicleta/create';
  private urlBicicletas = this.host.host + '/LaPlataEnBici/rest/Bicicleta/listadoBicicletas';
  private urlBicicletasLibres = this.host.host + '/LaPlataEnBici/rest/Bicicleta/listadoBicicletasLibres';
  private urlBicicleta = this.host.host + '/LaPlataEnBici/rest/Bicicleta/';
  private urlMisBicicletas = this.host.host + '/LaPlataEnBici/rest/Bicicleta/misBicicletas';
  private urlRetirar = this.host.host + '/LaPlataEnBici/rest/Bicicleta/retirarBicicleta';

  agregarBicicleta(bici: Bicicleta): Observable<Bicicleta> {

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'my-auth-token'
      })
    };
    console.log('Entro en agregarEstacion: ' + JSON.stringify(bici));

    return this.http.post<Bicicleta>(this.urlAgregar,  bici, httpOptions);
       // console.log('Este es el valor del id generado desde web service' + res.json()),

  }

  getMisBicicletas(id): Observable<DevolverBicicleta[]> {
    return this.http.get<DevolverBicicleta[]>(this.urlMisBicicletas + '/' + id);
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

  retirarBicicleta(idBicicleta, idUsuario): Observable<Bicicleta> {
    return this.http.get<Bicicleta>(this.urlRetirar + '/' + idBicicleta + '/' + idUsuario );
  }

}
