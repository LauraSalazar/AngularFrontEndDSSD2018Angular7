import { Component, OnInit } from '@angular/core';
import { BicicletaserviceService } from '../bicicletaservice.service';
import { EstacionserviceService } from '../estacionservice.service';
import { Bicicleta } from '../bicicleta';
import { Estado } from '../Estado';
import { Estacion } from '../estacion';
import { Router, ActivatedRoute } from '@angular/router';
import { NavigationserviceService } from '../navigationservice.service';

@Component({
  selector: 'app-agregarbicicleta',
  templateUrl: './agregarbicicleta.component.html',
  styleUrls: ['./agregarbicicleta.component.css']
})
export class AgregarbicicletaComponent implements OnInit {

  public estaciones: Estacion[] = [];
  public estados: Estado[] = [];
   id: number;

  bicicleta: Bicicleta = new Bicicleta(0, '', '', '',
    '', 0);
  public myId = 0;
  numeroCuadroInvalido = false;
  estadoInvalido = false;
  ubicacionInvalida = false;
  enviado = false;
  miEstado = '';
  estadosIguales = false;
  onSubmit() {

    console.log('El id del parametro es: ' + this.id);
    console.log('nombre:' + this.bicicleta.fechaIngreso);
    console.log('codigopostal:' + this.bicicleta.estado);
    console.log('latitud:' + this.bicicleta.ubicacionActual);
    console.log('longitud:' + this.bicicleta.numeroCuadro);
    console.log('isEstacion' + this.bicicleta.idEstacion);


    if (this.bicicleta.numeroCuadro.trim() === '') {
      this.numeroCuadroInvalido = true;
    } else {
      this.numeroCuadroInvalido = false;
    }
    if (this.bicicleta.estado.trim() === '') {
      this.estadoInvalido = true;
    } else {
      this.estadoInvalido = false;
    }
   /*  // Esto compara si se eligio el mismo estado, informa que no se va a modificar la bicicleta
    if (this.miEstado === 'Denunciada' && this.bicicleta.estado !== 'Denunciada') {
      this.estadosIguales = true;
    } else {
      this.estadosIguales = false;
    } */
    if (this.bicicleta.idEstacion.toString() === '0') {
      this.ubicacionInvalida = true;
    } else {
      this.ubicacionInvalida = false;
    }
    if (this.numeroCuadroInvalido || this.ubicacionInvalida || this.estadoInvalido) {
      return;
    }
    this.enviado = true;

    console.log(this.id);
    if (this.id.toString() === '0') {
      console.log('Antes de llamar al bicicletaService');
      this.bicicletaService.agregarBicicleta(this.bicicleta)
        .subscribe(
          bicicleta => this.route.navigate(['/bicicletaagregada', bicicleta, 'agregada']),
          error => this.bicicletaService.handleError = <any>error);
      console.log('Paso el agregarbicicleta');
    } else {
      console.log('ENTRO POR EL ELSE');
      this.bicicletaService.modificarBicicleta(this.bicicleta).subscribe(
        data => this.route.navigate(['/bicicletaagregada', this.bicicleta.id, 'modificada'])
      );
    }

  }

  constructor(private bicicletaService: BicicletaserviceService,
    private route: Router, private estacionService: EstacionserviceService,
    private navigateService: NavigationserviceService, private router: ActivatedRoute
  ) {
    console.log('Paso el constructor de altabicicleta');
  }

  ngOnInit() {
    this.id = this.router.snapshot.params['id'];
    console.log('Entro en ngOnInit');
    this.enviado = false;
    this.estadoInvalido = false;
    this.numeroCuadroInvalido = false;
    this.ubicacionInvalida = false;
    if (this.id.toString() === '0') {
      this.bicicleta = new Bicicleta(0, this.bicicleta.fechaIngreso, this.bicicleta.estado,
        this.bicicleta.numeroCuadro, this.bicicleta.ubicacionActual, this.bicicleta.idEstacion);
    } else {
      this.bicicletaService.getBicicleta(this.id).subscribe(
        bici => (
          this.bicicleta = bici,
          console.log('Esta es la ubicacion actual de la bici a modificar: ' + this.bicicleta.ubicacionActual),
          this.miEstado = bici.estado
                 )
      );
    }

    this.estacionService.getEstaciones().subscribe(
      user => this.estaciones = user,
      error => this.estacionService.handleError = <any>error);
  }
  volver() {
    if (this.id.toString() === '0' ) {
    this.navigateService.volver('/usuarioview', '/administradorview');
  } else {
    this.navigateService.volver('', '/listadobicicleta');
  }
}
}
