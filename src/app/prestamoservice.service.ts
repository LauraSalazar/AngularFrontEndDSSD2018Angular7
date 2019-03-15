import { Injectable } from '@angular/core';
import { HostService } from './host.service';
import { Observable } from 'rxjs';
import { Bicicleta } from './bicicleta';
import { Prestamo } from './prestamo';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PrestamoserviceService {
  private urlRetirar = this.host.host + '/Prestamo/retirarBicicleta';
  private urlGetPrestamo = this.host.host + '/Prestamo/getPrestamo';
  private urlMisPrestamos = this.host.host + '/Prestamo/misPrestamos';
  private urlDevolverBicicletaConDenuncia = this.host.host + '/rest/Prestamo/devolverBicicletaConDenuncia';
  private urlDevolverBicicletaSinDenuncia = this.host.host + '/Prestamo/devolverBicicletaSinDenuncia';
  constructor(private http: HttpClient, private host: HostService) {

  }

  retirarBicicleta(idBicicleta, idUsuario): Observable<Prestamo> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'my-auth-token'
      })
    };
    const pres: Prestamo = new Prestamo(0, '', '', 0, 0, 0, '', '', '', '', false);
    pres.idBicicleta = idBicicleta;
    pres.idPersona = idUsuario;
    return this.http.post<Prestamo>(this.urlRetirar , pres, httpOptions);
  }

  getPrestamo(idPrestamo): Observable<Prestamo> {
    return this.http.get<Prestamo>(this.urlGetPrestamo + '/' + idPrestamo);
  }

  getMisBicicletas(id): Observable<Prestamo[]> {
    return this.http.get<Prestamo[]>(this.urlMisPrestamos + '/' + id);
  }

  devolverBicicletaConDenuncia(prestamo): Observable<Prestamo[]> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'my-auth-token'
      })
    };
    return this.http.post<Prestamo[]>(this.urlDevolverBicicletaConDenuncia, prestamo, httpOptions);
  }

  devolverBicicletaSinDenuncia(prestamo): Observable<Prestamo[]> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'my-auth-token'
      })
    };
    return this.http.post<Prestamo[]>(this.urlDevolverBicicletaSinDenuncia, prestamo, httpOptions);
  }
}
