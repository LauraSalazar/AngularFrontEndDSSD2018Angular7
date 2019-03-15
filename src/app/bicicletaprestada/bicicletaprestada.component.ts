import { Component, OnInit } from '@angular/core';
import { PrestamoserviceService } from '../prestamoservice.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Prestamo } from '../prestamo';
import { NavigationserviceService } from '../navigationservice.service';

@Component({
  selector: 'app-bicicletaprestada',
  templateUrl: './bicicletaprestada.component.html',
  styleUrls: ['./bicicletaprestada.component.css']
})
export class BicicletaprestadaComponent implements OnInit {
  idPrestamo;
  prestamo = new Prestamo(0, '', '', 0, 0, 0, '', '', '', '', false);
  constructor(private prestamoService: PrestamoserviceService, private route: ActivatedRoute,
    private navigateService: NavigationserviceService) { }

  ngOnInit() {
    this.idPrestamo = this.route.snapshot.params['idPrestamo'];
    console.log('Esto es lo que viene en idPrestamo ' + this.idPrestamo);
    this.prestamoService.getPrestamo(this.idPrestamo).subscribe(
      prestamo => this.prestamo = prestamo
    );
  }
  volver() {
      this.navigateService.volver('/retirarbicicleta' + '/' + this.prestamo.idPersona , '');
  }
}
