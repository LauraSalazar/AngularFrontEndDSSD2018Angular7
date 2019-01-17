import {Usuario} from './Usuario';
import { routing } from './app.router';
import {Injectable} from '@angular/core';
import {Http, Response, RequestOptions, Headers} from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { HostService } from './host.service';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

@Injectable()
export class UsuarioserviceService {

  private urlAgregar = this.host.host + '/LaPlataEnBici/rest/Usuario/create';
  private urlUsuarios =  this.host.host + '/LaPlataEnBici/rest/Usuario/listadoUsuario';
  private urlUsuario =  this.host.host + '/LaPlataEnBici/rest/Usuario/';

  agregarUsuario(usu: Usuario): Observable<Usuario> {

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'my-auth-token'
      })
    };
    console.log('Entro en agregarUsuario');
    return this.http.post<Usuario>(this.urlAgregar, usu, httpOptions);
  }


  getUsuarios(): Observable<Usuario[]> {
        return this.http.get<Usuario[]>(this.urlUsuarios);
    }

  constructor(private http: HttpClient, private route: Router, private host: HostService) {

  }

  handleError(error: any) {
    const msg = (error.message) ? error.message : 'Error desconocido';
    console.error(msg);
    return Observable.throw(msg);
  }


  getUser(id: number): Observable<Usuario> {
        console.log('Entro en getUser de Usuario Service' + id);
        const url = this.urlUsuario + id;
        console.log('Este es el valor del url del get Usuario: ' + url);
        return this.http.get<Usuario>(
          // 'http://localhost:8080/LaPlataEnBici/rest/Usuario/32768')
             url);
  }
}
