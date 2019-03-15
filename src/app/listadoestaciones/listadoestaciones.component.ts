import { Estacion } from '../estacion';
import { EstacionserviceService } from '../estacionservice.service';
import { Component, OnInit } from '@angular/core';
import { Estado } from '../Estado';
import { Router } from '@angular/router';
import { NavigationserviceService } from '../navigationservice.service';
import { ActivatedRoute } from '@angular/router';
import { SessionStorageService } from 'ngx-webstorage';

@Component({
  selector: 'app-listadoestaciones',
  templateUrl: './listadoestaciones.component.html',
  styleUrls: ['./listadoestaciones.component.css']
})
export class ListadoestacionesComponent implements OnInit {


public estaciones: Estacion[] = [];
public estados: Estado[] = [];
esUsuario = false;

  constructor(private estacionService: EstacionserviceService, private router: Router,
    private navigateService: NavigationserviceService, private route: ActivatedRoute,
    private localSt: SessionStorageService) {

  }

    ngOnInit() {
    this.esUsuario = (this.localSt.retrieve('categoria') === 1) ;
    console.log('Entro en ngOnInit');
    this.estacionService.getEstaciones().subscribe(
    user => this.estaciones = user,
    error => this.estacionService.handleError = <any>error);
        this.estados.push(new Estado('1', 'Operativa'));
        this.estados.push(new Estado('2', 'Cerrada'));
        this.estados.push(new Estado('3', 'En construccion'));

  }

  volver() {
    const myId = this.route.snapshot.params['id'];
    this.navigateService.volver('/usuarioview/' + myId, '/administradorview');
  }
}
