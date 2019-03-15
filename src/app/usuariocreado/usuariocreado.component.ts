import { Usuario } from '../Usuario';
import { UsuarioserviceService } from '../usuarioservice.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Estado } from '../Estado';
import { NavigationserviceService } from '../navigationservice.service';

@Component({
  selector: 'app-usuariocreado',
  templateUrl: './usuariocreado.component.html',
  styleUrls: ['./usuariocreado.component.css']
})
export class UsuariocreadoComponent implements OnInit {

 user:  Usuario = new Usuario(0, ' ', ' ',
       ' ', ' ', ' ', ' ', ' ', ' ');

 public sexos: Estado[] = [] ;
 modo: string;

  constructor(private usuarioService: UsuarioserviceService, private route: ActivatedRoute,
    private navigateService: NavigationserviceService
  ) {
     console.log('Entro en el constructor DE USUARIOCREADO');
   }


  ngOnInit() {
      console.log('Entro en el ngOnInit, valor del id generado en usuariocreado:' + this.route.snapshot.params['id']);
      this.user.id = this.route.snapshot.params['id'];
      this.modo = this.route.snapshot.params['modo'];
      this.usuarioService.getUser(this.user.id).subscribe(
    usuario => this.user = usuario,
    error => this.usuarioService.handleError = <any>error);
    console.log('Valores de user en usuariocredo luego de llamar al getUser');
    console.log('this.user.id: ' +  this.user.id );
    console.log('this.user.dni: ' +  this.user.dni );
    console.log('this.user.domicilio: ' +  this.user.domicilio );
    console.log('this.user.nombres: ' +  this.user.nombres );
    console.log('this.user.apellido: ' +  this.user.apellido );
    console.log('this.user.fechaNac: ' +  this.user.fechaNac );
    console.log('this.user.sexo: ' +  this.user.sexo );

        this.sexos.push(new Estado('M', 'Masculino'));
        this.sexos.push(new Estado('F', 'Femenino'));
   }

   volver() {
    if (this.modo === 'agregado') {
      this.navigateService.volver('', '/altausuario/' + 0);
    } else {
      this.navigateService.volver('', '/listadousuarios');
    }
  }
  }




