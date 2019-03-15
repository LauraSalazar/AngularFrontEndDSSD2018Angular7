import { Usuario } from '../Usuario';
import { UsuarioserviceService } from '../usuarioservice.service';
import { Component, OnInit } from '@angular/core';
import { Estado } from '../Estado';
import { Router } from '@angular/router';
import { NavigationserviceService } from '../navigationservice.service';

@Component({
  selector: 'app-listadousuarios',
  templateUrl: './listadousuarios.component.html',
  styleUrls: ['./listadousuarios.component.css']

})
export class ListadousuariosComponent implements OnInit {

public usuarios: Usuario[] = [];
public estados: Estado[] = [];

  constructor(private usuarioService: UsuarioserviceService,  private router: Router, private navigateService: NavigationserviceService) {

  }

    ngOnInit() {
    console.log('Entro en ngOnInit');
    this.usuarioService.getUsuarios().subscribe(
    user => this.usuarios = user,
    error => this.usuarioService.handleError = <any>error);

        this.estados.push(new Estado('1', 'Inhabilitacion definitiva'));
        this.estados.push(new Estado('2', 'Inhabilitacion temporal'));
        this.estados.push(new Estado('3', 'Habilitado'));

  }

  volver() {
    this.navigateService.volver('/usuarioview', '/administradorview');
  }

}
