import { Component, OnInit } from '@angular/core';
import { LoggerService } from '../logger.service';
import { BicicletaserviceService } from '../bicicletaservice.service';
import { EstacionserviceService } from '../estacionservice.service';
import { NgModel } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { Bicicleta } from '../bicicleta';
import { Estado } from '../Estado';
import { Estacion } from '../estacion';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-agregarbicicleta',
  templateUrl: './agregarbicicleta.component.html',
  styleUrls: ['./agregarbicicleta.component.css']
})
export class AgregarbicicletaComponent implements OnInit {

public estaciones: Estacion[] = [];
public estados: Estado[] = [];

bicicleta:  Bicicleta = new Bicicleta(0, ' ', ' ', ' ',
       ' ');
    public myId = 0;

  onSubmit() {
    console.log('nombre:' + this.bicicleta.fechaIngreso);
    console.log('codigopostal:' + this.bicicleta.estado);
        console.log('latitud:' + this.bicicleta.ubicacionActual);
        console.log('longitud:' + this.bicicleta.numeroCuadro);

    this.bicicleta = new Bicicleta(0, this.bicicleta.fechaIngreso, this.bicicleta.estado,
    this.bicicleta.numeroCuadro, this.bicicleta.ubicacionActual);
    this.bicicleta.id = 0;
    console.log('Antes de llamar al bicicletaService');
  if ( !this.bicicleta) { return; }

  this.bicicletaService.agregarBicicleta(this.bicicleta)
  .subscribe(
    bicicleta => this.route.navigate(['/bicicletaagregada',  bicicleta]),
    error => this.bicicletaService.handleError = <any>error);

    console.log('Paso el agregarbicicleta');
  }

  constructor(private bicicletaService: BicicletaserviceService,
    private route: Router, private estacionService: EstacionserviceService
  ) {
    console.log('Paso el constructor de altabicicleta');
    }

      ngOnInit() {

    console.log('Entro en ngOnInit');

    this.estacionService.getEstaciones().subscribe(
    user => this.estaciones = user,
    error => this.estacionService.handleError = <any>error);

      }

}
