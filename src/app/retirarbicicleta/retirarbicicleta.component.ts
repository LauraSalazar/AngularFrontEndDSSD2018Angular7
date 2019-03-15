import { Component, OnInit } from '@angular/core';
import { BicicletaserviceService } from '../bicicletaservice.service';
import { Bicicleta } from '../bicicleta';
import { Router, ActivatedRouteSnapshot } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { PrestamoserviceService } from '../prestamoservice.service';
import { NavigationserviceService } from '../navigationservice.service';

@Component({
  selector: 'app-retirarbicicleta',
  templateUrl: './retirarbicicleta.component.html',
  styleUrls: ['./retirarbicicleta.component.css']
})
export class RetirarbicicletaComponent implements OnInit {
  enviado = false;
   misBicis: Bicicleta[] = [];
  constructor(private route: Router, private bicicletaService: BicicletaserviceService, private routeActivated: ActivatedRoute,
    private prestamoService: PrestamoserviceService, private navigateService: NavigationserviceService) { }

  ngOnInit() {
    this.enviado = false;
    this.bicicletaService.getBicicletas().subscribe(
      data => this.misBicis = data,
    );
  }

  retirarBicicleta(idBicicleta) {
    this.enviado = true;
    console.log('Entro en retirarBicicleta');
    const userId = this.routeActivated.snapshot.params['id'];
    this.prestamoService.retirarBicicleta(idBicicleta, userId).subscribe(
      prestamo => this.route.navigate(['/bicicletaprestada', prestamo.idPrestamo])
    );
  }

  volver() {
    this.navigateService.volver('/usuarioview' + '/' + this.routeActivated.snapshot.params['id'] , '');
  }

  bicicletaOrdenarPorUbicacion() {
    this.bicicletaService.ordenarPorUbicacion().subscribe(
      bicis => this.misBicis = bicis,
      error => this.bicicletaService.handleError = <any>error
    );
  }


  bicicletaOrdenarPorNumeroCuadro() {
    this.bicicletaService.ordenarPorNumeroCuadro().subscribe(
      bicis => this.misBicis = bicis,
      error => this.bicicletaService.handleError = <any>error
    );
  }


  bicicletaOrdenarPorEstado() {
    this.bicicletaService.ordenarPorEstado().subscribe(
      bicis => this.misBicis = bicis,
      error => this.bicicletaService.handleError = <any>error
    );
  }
}
