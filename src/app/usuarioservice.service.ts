import {Usuario} from './Usuario';
import {Injectable} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { HostService } from './host.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class UsuarioserviceService {

  private urlAgregar = this.host.host + '/Usuario/create';
  private urlUsuarios =  this.host.host + '/Usuario/listadoUsuario';
  private urlUsuario =  this.host.host + '/Usuario';
  private urlUsuarioModificar =  this.host.host + '/Usuario/modificar';

  modificarUsuario(usu: Usuario): Observable<Usuario> {

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'my-auth-token'
      })
    };
    console.log('Entro en modificarUsuario');
    console.log('usu.dni: ' + usu.dni);
    console.log('usu.nombre: ' + usu.nombres);
    console.log('usu.apellido: ' + usu.apellido);
    console.log('usu.domicilio: ' + usu.domicilio);
    console.log('usu.fechaNac: ' + usu.fechaNac);
    console.log('usu.mail: ' + usu.mail);
    console.log('usu.sexo: ' + usu.sexo);
    console.log('usu.password: ' + usu.password);
    console.log('usu.id: ' + usu.id);
    return this.http.post<Usuario>(this.urlUsuarioModificar, usu, httpOptions);
  }

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
        const url = this.urlUsuario + '/' + id;
        console.log('Este es el valor del url del get Usuario: ' + url);
        return this.http.get<Usuario>(
          // 'http://localhost:8080/LaPlataEnBici/rest/Usuario/32768')
             url);
  }
}
