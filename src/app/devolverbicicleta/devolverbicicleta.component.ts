import { Component, OnInit } from '@angular/core';
import { DevolverBicicleta } from '../DevolverBicicleta';
import { BicicletaserviceService } from '../bicicletaservice.service';
import { ActivatedRoute } from '@angular/router';
import { Bicicleta } from '../bicicleta';

@Component({
  selector: 'app-devolverbicicleta',
  templateUrl: './devolverbicicleta.component.html',
  styleUrls: ['./devolverbicicleta.component.css']
})
export class DevolverbicicletaComponent implements OnInit {
  public misBicis: DevolverBicicleta[] = [];

  constructor(private bicicletaService: BicicletaserviceService, private route: ActivatedRoute) {

   }

  ngOnInit() {
    this.bicicletaService.getMisBicicletas(this.route.snapshot.params['id']).subscribe(
       data => this.misBicis = data
    );
  }

}
