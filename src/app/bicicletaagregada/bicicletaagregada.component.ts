import { Bicicleta } from '../bicicleta';
import { BicicletaserviceService } from '../bicicletaservice.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Estado } from '../Estado';
import { NavigationserviceService } from '../navigationservice.service';

@Component({
  selector: 'app-bicicletaagregada',
  templateUrl: './bicicletaagregada.component.html',
  styleUrls: ['./bicicletaagregada.component.css']
})
export class BicicletaagregadaComponent implements OnInit {

  modo: string;
  bicicleta: Bicicleta = new Bicicleta(0, '', '', '',
    '', 0);
  public estados: Estado[] = [];

  constructor(private bicicletaService: BicicletaserviceService, private route: ActivatedRoute,
    private router: Router, private navigateService: NavigationserviceService) {
    console.log('Entro en el constructor DE BICICLETAAGREGADA');
  }

  ngOnInit() {
    this.modo = this.route.snapshot.params['modo'];
    console.log('Este es el valor de modo: ' + this.modo);

    console.log('Entro en el ngOnInit, valor del id generado en bicicletacreado:' + this.route.snapshot.params['id']);
    this.bicicleta.id = this.route.snapshot.params['id'];
    this.bicicletaService.getBicicleta(this.bicicleta.id).subscribe(
      bicicleta => this.bicicleta = bicicleta,
      error => this.bicicletaService.handleError = <any>error);
    console.log('Valores de la bicicleta en bicicletaagregada luego de llamar al getBicicleta');
    console.log('this.bicicleta.id: ' + this.bicicleta.id);
    console.log('this.bicicleta.numeroCuadra: ' + this.bicicleta.numeroCuadro);
    console.log('this.bicicleta.estado: ' + this.bicicleta.estado);
    console.log('this.bicicleta.ubicacionActual: ' + this.bicicleta.ubicacionActual);

    this.estados.push(new Estado('1', 'Apta para Uso'));
    this.estados.push(new Estado('2', 'En reparacion'));
    this.estados.push(new Estado('3', 'En desuso'));
    this.estados.push(new Estado('3', 'Denunciada'));
  }

  volver() {
    if (this.modo === 'agregada') {
      this.navigateService.volver('', '/agregarbicicleta/' + 0);
    } else {
      this.navigateService.volver('', '/listadobicicleta');
    }
  }
}
