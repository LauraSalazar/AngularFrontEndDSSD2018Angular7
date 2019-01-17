import { Component, OnInit } from '@angular/core';
import { LoggerService } from '../logger.service';
import { EstacionserviceService } from '../estacionservice.service';
import { NgModel } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { Estacion } from '../estacion';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-agregarestacion',
  templateUrl: './agregarestacion.component.html',
  styleUrls: ['./agregarestacion.component.css']
})
export class AgregarestacionComponent  {

 estacion:  Estacion = new Estacion(0, ' ', ' ', ' ',
       ' ', ' ', ' ', ' ', 0);
    public myId = 0;

  onSubmit() {
    console.log('nombre:' + this.estacion.nombre);
    console.log('codigopostal:' + this.estacion.codigopostal);
        console.log('latitud:' + this.estacion.latitud);
        console.log('longitud:' + this.estacion.longitud);
        console.log('estado:' + this.estacion.estado);
        console.log('abiertodesde:' + this.estacion.abiertodesde);
        console.log('abiertohasta:' + this.estacion.abiertohasta);
        console.log('cantidadbicicletasmax:' + this.estacion.cantidadbicicletasmax);
    this.estacion = new Estacion(0, this.estacion.nombre, this.estacion.codigopostal, this.estacion.latitud,
    this.estacion.longitud, this.estacion.estado, this.estacion.abiertodesde, this.estacion.abiertohasta,
    this.estacion.cantidadbicicletasmax);
    this.estacion.id = 0;
    console.log('Antes de llamar al estacionService');
  if ( !this.estacion) { return; }
  this.estacionService.agregarEstacion(this.estacion).subscribe(
    estacion => this.route.navigate(['/estacioncreada', estacion]),
    error => this.estacionService.handleError = <any>error);

    console.log('Paso el agregarEstacion');
  }

  constructor(private estacionService: EstacionserviceService, private route: Router
  ) {
    console.log('Paso el constructor de altaestacion');
    }
}
