import { Usuario } from '../Usuario';
import { LoggerService } from '../logger.service';
import { Component, OnInit } from '@angular/core';
import { UsuariomockserviceService } from '../usuariomockservice.service';
import { UsuarioserviceService } from '../usuarioservice.service';
import { NgModel } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-altausuario',
  templateUrl: './altausuario.component.html',
  styleUrls: ['./altausuario.component.css']
})
export class AltausuarioComponent {

  user: Usuario = new Usuario(0, '', '', '',
    '', '', '', '', '');
  public myId = 0;

  onSubmit() {
    console.log('dni:' + this.user.dni);
    console.log('nombres:' + this.user.nombres);
    console.log('apellido:' + this.user.apellido);
    console.log('fechaNac:' + this.user.fechaNac);
    console.log('domicilio:' + this.user.domicilio);
    console.log('mail:' + this.user.mail);
    console.log('sexo:' + this.user.sexo);
    if (this.user.dni !== '' && this.user.nombres !== '' && this.user.apellido !== '' && this.user.password !== '' &&
    this.user.domicilio !== '' && this.user.fechaNac !== '' && this.user.fechaNac !== '') {
      this.user = new Usuario(0, this.user.dni, this.user.apellido, this.user.nombres,
        this.user.domicilio, this.user.fechaNac, this.user.sexo, this.user.mail, this.user.password);
      this.user.id = 0;
      console.log('Antes de llamar al usuarioService');
      if (!this.user) { return; }
      this.userService.agregarUsuario(this.user).subscribe(
        usuario => this.route.navigate(['/usuariocreado', usuario]),
        error => this.userService.handleError = <any>error);

      console.log('Paso el agregarUsuario');
    }
  }

  volver() {
    this.route.navigate(['']);
  }

  constructor(private userService: UsuarioserviceService, private route: Router
  ) {
    console.log('Paso el constructor de altausuario');
  }
}


