import { Injectable } from '@angular/core';
import { TipoProducto } from './TipoProducto';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
interface ProductoResponse {
  id: number,
  name: string,
  costPrice: number,
  salePrice: number,
  tipoProducto: number
}

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

    private getProductosPorTipoUrl = 'http://localhost:8082/listadoproductosportipo/';



    getProductos(id): Observable<ProductoResponse[]> {
      console.log('antes del llamado al servicio ' + this.getProductosPorTipoUrl+id )
       return this.http.get<ProductoResponse[]>(this.getProductosPorTipoUrl+id);
       //obs.subscribe((response) =>  console.log(response));
    }

    constructor(private http: HttpClient) { }
}
