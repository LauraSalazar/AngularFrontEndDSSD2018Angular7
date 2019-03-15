import { Bicicleta } from '../bicicleta';
import { BicicletaserviceService } from '../bicicletaservice.service';
import { Component, OnInit } from '@angular/core';
import { Estado } from '../Estado';
import { NavigationserviceService } from '../navigationservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listadobicicleta',
  templateUrl: './listadobicicleta.component.html',
  styleUrls: ['./listadobicicleta.component.css']
})
export class ListadobicicletaComponent implements OnInit {

  public bicicletas: Bicicleta[] = [];
  public estados: Estado[] = [];

  constructor(private bicicletaService: BicicletaserviceService, private router: Router,
    private navigateService: NavigationserviceService) {

  }

  ngOnInit() {
    console.log('Entro en ngOnInit');
    this.bicicletaService.getBicicletas().subscribe(
      bicis => this.bicicletas = bicis,
      error => this.bicicletaService.handleError = <any>error);

    this.estados.push(new Estado('1', 'Apta para uso'));
    this.estados.push(new Estado('2', 'En reparación'));
    this.estados.push(new Estado('3', 'En desuso'));
    this.estados.push(new Estado('4', 'Denunciada'));
  }

  volver() {
    this.navigateService.volver('/usuarioview', '/administradorview');
  }

  bicicletaOrdenarPorUbicacion() {
    this.bicicletaService.ordenarPorUbicacion().subscribe(
      bicis => this.bicicletas = bicis,
      error => this.bicicletaService.handleError = <any>error
    );
  }

  bicicletaOrdenarPorEstado() {
    this.bicicletaService.ordenarPorEstado().subscribe(
      bicis => this.bicicletas = bicis,
      error => this.bicicletaService.handleError = <any>error
    );
  }

  bicicletaOrdenarPorNumeroCuadro() {
    this.bicicletaService.ordenarPorNumeroCuadro().subscribe(
      bicis => this.bicicletas = bicis,
      error => this.bicicletaService.handleError = <any>error
    );
  }

}
