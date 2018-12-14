import { Injectable } from '@angular/core';
import { TipoProducto } from './TipoProducto';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';


interface TipoProductoResponse {
  id: number,
  description: string,
  initials: string
}

@Injectable({
  providedIn: 'root'
})
export class TipoproductoService {

  public tipoProductos: TipoProducto[];
  private getTipoProductosUrl = 'http://localhost:8082/listadoTipoProductos';

  agregarTipoProducto(tipoProducto) {
    this.tipoProductos.push(tipoProducto);
  }

  getTipoProductos(): Observable<TipoProducto[]> {
     return this.http.get<TipoProducto[]>(this.getTipoProductosUrl);
     //obs.subscribe((response) =>  console.log(response));
  }

  constructor(private http: HttpClient) { }

}
