import { Component, OnInit } from '@angular/core';
import { BonitaserviceService } from '../bonitaservice.service';
import { Proceso } from '../Proceso';
import { MyToken } from '../MyToken'

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {
  myToken: MyToken;
  procesos: Proceso[];
  constructor(private bonitaService: BonitaserviceService) { }

  ngOnInit() {
    
  }

}
