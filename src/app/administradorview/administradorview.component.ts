import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HostService } from '../host.service';
import { SessionStorageService } from 'ngx-webstorage';


@Component({
  selector: 'app-administradorview',
  templateUrl: './administradorview.component.html',
  styleUrls: ['./administradorview.component.css']
})
export class AdministradorviewComponent implements OnInit {

   esAdministrador: boolean;

  constructor(private http: HttpClient, private host: HostService, private localSt: SessionStorageService) {

  }

  ngOnInit() {
    console.log('Este es el valor de categoria de la session: ' + this.localSt.retrieve('categoria'));
    console.log('Esto es el resultado de comparar: ' + (this.localSt.retrieve('categoria') === 2));
    this.esAdministrador = (this.localSt.retrieve('categoria') === 2);
  }

}
