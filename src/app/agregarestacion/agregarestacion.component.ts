import { Component, OnInit } from '@angular/core';
import { EstacionserviceService } from '../estacionservice.service';
import { Estacion } from '../estacion';
import { Router, ActivatedRoute } from '@angular/router';
import { NavigationserviceService } from '../navigationservice.service';

@Component({
  selector: 'app-agregarestacion',
  templateUrl: './agregarestacion.component.html',
  styleUrls: ['./agregarestacion.component.css']
})
export class AgregarestacionComponent  implements OnInit {

 estacion:  Estacion = new Estacion(0, '', '', '',
       '', '', '', '', '');
    public myId = '';
    enviado = false;
    nombreInvalido = false;
    codigoPostalInvalido = false;
    estadoInvalido = false;
    longitudInvalida = false;
    latitudInvalida = false;
    abiertoDesdeInvalido = false;
    abiertoHastaInvalido = false;
    bicicletasDisponiblesInvalido = false;
    modificar;

    ngOnInit() {
      this.nombreInvalido = false;
      this.codigoPostalInvalido = false;
      this.estadoInvalido = false;
      this.longitudInvalida = false;
      this.latitudInvalida = false;
      this.abiertoDesdeInvalido = false;
      this.abiertoHastaInvalido = false;
      this.bicicletasDisponiblesInvalido = false;
      this.enviado = false;
      this.modificar = this.router.snapshot.params['id'];
      console.log('El valor de modificar antes de preguntar: ' + this.modificar);
      console.log(this.modificar === '0');
      if ( !(this.modificar === '0' )) {
        console.log('Entro en el if de moficicar !== 0');
        this.estacionService.getEstacion(this.modificar).subscribe(
          estacion => this.estacion = estacion
        );
      }
    }

  onSubmit() {
    if (this.estacion.nombre.trim() === '') {
      this.nombreInvalido = true;
    } else {
      this.nombreInvalido = false;
    }
    if (this.estacion.codigopostal.trim() === '') {
      this.codigoPostalInvalido = true;
    } else {
      this.codigoPostalInvalido = false;
    }
    if (this.estacion.estado.trim() === '') {
      this.estadoInvalido = true;
    } else {
      this.estadoInvalido = false;
    }
    if (this.estacion.longitud.trim() === '') {
      this.longitudInvalida = true;
    } else {
      this.longitudInvalida = false;
    }
    if (this.estacion.latitud.trim() === '') {
      this.latitudInvalida = true;
    } else {
      this.latitudInvalida = false;
    }
    if (this.estacion.abiertodesde.trim() === '') {
      this.abiertoDesdeInvalido = true;
    } else {
      this.abiertoDesdeInvalido = false;
    }
    if (this.estacion.abiertohasta.trim() === '') {
      this.abiertoHastaInvalido = true;
    } else {
      this.abiertoHastaInvalido = false;
    }
    if (this.estacion.cantidadbicicletasmax.toString().trim() === '') {
      this.bicicletasDisponiblesInvalido = true;
    } else {
      this.bicicletasDisponiblesInvalido = false;
    }
    if (isNaN(Number(this.estacion.cantidadbicicletasmax))) {
      this.bicicletasDisponiblesInvalido = true;
    } else {
      this.bicicletasDisponiblesInvalido = false;
    }

    if (this.estadoInvalido || this.latitudInvalida || this.longitudInvalida || this.abiertoDesdeInvalido ||
      this.bicicletasDisponiblesInvalido || this.codigoPostalInvalido || this.abiertoHastaInvalido ||
      this.nombreInvalido) {
      return;
    }
    this.enviado = true;
    console.log('nombre:' + this.estacion.nombre);
    console.log('codigopostal:' + this.estacion.codigopostal);
        console.log('latitud:' + this.estacion.latitud);
        console.log('longitud:' + this.estacion.longitud);
        console.log('estado:' + this.estacion.estado);
        console.log('abiertodesde:' + this.estacion.abiertodesde);
        console.log('abiertohasta:' + this.estacion.abiertohasta);
        console.log('cantidadbicicletasmax:' + this.estacion.cantidadbicicletasmax);
    // Pregunto si es para agrgar o para modificar

    if (this.modificar === '0') {
    this.estacion = new Estacion(0, this.estacion.nombre, this.estacion.codigopostal, this.estacion.latitud,
    this.estacion.longitud, this.estacion.estado, this.estacion.abiertodesde, this.estacion.abiertohasta,
    this.estacion.cantidadbicicletasmax);
    this.estacion.id = 0;
    console.log('Antes de llamar al estacionService');

  this.estacionService.agregarEstacion(this.estacion).subscribe(
    idEstacion => this.route.navigate(['/estacioncreada', idEstacion, 'agregada']),
    error => this.estacionService.handleError = <any>error);

    console.log('Paso el agregarEstacion');
  } else {
    // Modifico la estacion
    this.estacionService.modificarEstacion(this.estacion).subscribe(
      data => this.route.navigate(['/estacioncreada', this.estacion.id, 'modificada']),
      error => this.estacionService.handleError = <any>error);
  }
  }

  constructor(private estacionService: EstacionserviceService, private route: Router, private navigateService: NavigationserviceService,
    private router: ActivatedRoute
  ) {
    console.log('Paso el constructor de altaestacion');
    }

    volver() {
      if (this.modificar === '0') {
      this.navigateService.volver('/usuarioview', '/administradorview');
    } else {
      this.navigateService.volver('/usuarioview', '/listadoestaciones/' + 2);
    }
  }

}
