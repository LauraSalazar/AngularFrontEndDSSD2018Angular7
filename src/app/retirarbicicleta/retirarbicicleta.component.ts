import { Component, OnInit } from '@angular/core';
import { BicicletaserviceService } from '../bicicletaservice.service';
import { Bicicleta} from '../bicicleta';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-retirarbicicleta',
  templateUrl: './retirarbicicleta.component.html',
  styleUrls: ['./retirarbicicleta.component.css']
})
export class RetirarbicicletaComponent implements OnInit {

  private misBicis: Bicicleta[] = [];
  constructor(private route: Router, private bicicletaService: BicicletaserviceService, private routeActivated: ActivatedRoute) { }

  ngOnInit() {
    this.bicicletaService.getBicicletas().subscribe(
      data => this.misBicis = data,
    );
  }

  retirarBicicleta(id) {
    console.log('Entro en retirarBicicleta');
    this.bicicletaService.retirarBicicleta(id, this.routeActivated.snapshot.params['id']).subscribe(
      data => this.route.navigate(['bicicletaagregada', id]),
    );
  }

}
