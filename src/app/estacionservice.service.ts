import { Injectable } from '@angular/core';
import { Estacion } from './estacion';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { HostService } from './host.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class EstacionserviceService {
  // host

  private urlAgregar = this.host.host + '/Estacion/create';
  private urlEstaciones = this.host.host + '/Estacion/listadoEstaciones';
  private urlEstacion = this.host.host + '/Estacion';
  private urlEstacionModificar = this.host.host + '/Estacion/modificar';

  modificarEstacion(estacion: Estacion): Observable<Estacion> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'my-auth-token'
      })
    };
    console.log('Entro en modificar estacion');
    return this.http.post<Estacion>(this.urlEstacionModificar, estacion, httpOptions);
  }

  agregarEstacion(est: Estacion): Observable<Estacion> {

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'my-auth-token'
      })
    };
    console.log('Entro en agregarEstacion');
    return this.http.post<Estacion>(this.urlAgregar, est, httpOptions);

  }


  getEstaciones(): Observable<Estacion[]> {
    console.log('Entro en getEstaciones');
    return this.http.get<Estacion[]>(this.urlEstaciones);


  }

  constructor(private http: HttpClient, private route: Router, private host: HostService) {

  }

  handleError(error: any) {
    const msg = (error.message) ? error.message : 'Error desconocido';
    console.error(msg);
    return Observable.throw(msg);
  }

  getEstacion(id): Observable<Estacion> {
    console.log('Entro en getEstacion de Estacion Service' + id);
    const url = this.urlEstacion + '/' + id;
    console.log('Este es el valor del url del get Estacion: ' + url);
    return this.http.get<Estacion>(
      // 'http://localhost:8080/LaPlataEnBici/rest/Usuario/32768')
      url)
      ;
  }

}
