import { Estacion } from '../estacion';
import { EstacionserviceService } from '../estacionservice.service';
import { Component, OnInit } from '@angular/core';
import { Estado } from '../Estado';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-listadoestaciones',
  templateUrl: './listadoestaciones.component.html',
  styleUrls: ['./listadoestaciones.component.css']
})
export class ListadoestacionesComponent implements OnInit {


public estaciones: Estacion[] = [];
public estados: Estado[] = [];

  constructor(private estacionService: EstacionserviceService) {

  }

    ngOnInit() {
    console.log('Entro en ngOnInit');
    this.estacionService.getEstaciones().subscribe(
    user => this.estaciones = user,
    error => this.estacionService.handleError = <any>error);
        this.estados.push(new Estado('1', 'Operativa'));
        this.estados.push(new Estado('2', 'Cerrada'));
        this.estados.push(new Estado('3', 'En construccion'));

  }

}
