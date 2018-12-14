import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { Producto } from '../Producto';
import { ProductoService} from '../producto.service';
import { switchMap } from 'rxjs/operators';
import { Datos } from '../Datos';
import { NgModel , NgForm , FormsModule } from '@angular/forms';
import { BonitaserviceService } from '../bonitaservice.service';

@Component({
  selector: 'app-tipoproducto',
  templateUrl: './tipoproducto.component.html',
  styleUrls: ['./tipoproducto.component.css']
})
export class TipoproductoComponent implements OnInit {

  private productos: Producto[];
  private id;
  public datos: Datos = new Datos(0,0);
  public otrosDatos: Datos[] = [];
  private idProceso;

  constructor(private router: Router ,private route: ActivatedRoute, private productoService: ProductoService, private bonitaService: BonitaserviceService) {

}

comprar(cupon,empleado,producto) {
  console.log('este es mi id de Procesos antes de llamar al web service' + this.idProceso);
  this.bonitaService.iniciarProceso(this.idProceso,cupon,empleado,producto);
  this.router.navigateByUrl('/producto');
}
  ngOnInit() {

    this.route.paramMap.pipe(
      switchMap(
        (params: ParamMap) =>
        this.idProceso = this.bonitaService.devolverIdProceso(params.get('idProceso'))
      )
    ).subscribe(data => console.log('salio ' + this.idProceso));

    console.log('este es mi id de Procesos em tipoProductos ' + this.idProceso);

    this.route.paramMap.pipe(
      switchMap(
        (params: ParamMap) =>
        this.productoService.getProductos(params.get('id'))
      )
    ).subscribe(data => this.productos = data);

       this.route.paramMap.pipe(
      switchMap(
        (params: ParamMap) => params.get('id')
      )
    ).subscribe(data => this.id = data);

  }

}
