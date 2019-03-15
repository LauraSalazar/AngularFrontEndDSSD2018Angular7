import { Usuario } from '../Usuario';
import { Component, OnInit } from '@angular/core';
import { UsuarioserviceService } from '../usuarioservice.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NavigationserviceService } from '../navigationservice.service';

@Component({
  selector: 'app-altausuario',
  templateUrl: './altausuario.component.html',
  styleUrls: ['./altausuario.component.css']
})
export class AltausuarioComponent implements OnInit {

  user: Usuario = new Usuario(0, '', '', '',
  '', '', '', '', '');
  public myId;
  dniInvalido = false;
  nombreInvalido = false;
  apellidoInvalido = false;
  passwordInvalido = false;
  domicilioInvalido = false;
  fechaInvalida = false;
  emailInvalido = false;
  enviado = false;

  ngOnInit() {
    this.enviado = false;
    this.myId = this.router.snapshot.params['id'];
    console.log('Esto es lo que tengo en id: ' + this.myId);
    if (this.myId === '0') {
      this.user = new Usuario(0, '', '', '',
        '', '', '', '', '');
    } else {
      console.log('ENTRO POR EL ELSE modifica usuario');
      this.userService.getUser(this.myId).subscribe(
        user => this.user = user,
      );
    }
  }

  onSubmit() {

    if (this.user.dni.trim() === '') {
      this.dniInvalido = true;
    } else {
      this.dniInvalido = false;
    }

    if (this.user.nombres.trim() === '') {
      this.nombreInvalido = true;
    } else {
      this.nombreInvalido = false;
    }

    if (this.user.apellido.trim() === '0') {
      this.apellidoInvalido = true;
    } else {
      this.apellidoInvalido = false;
    }

    if (this.user.password.trim() === '') {
      this.passwordInvalido = true;
    } else {
      this.passwordInvalido = false;
    }

    if (this.user.domicilio.trim() === '') {
      this.domicilioInvalido = true;
    } else {
      this.domicilioInvalido = false;
    }

    if (this.user.fechaNac.trim() === '') {
      this.fechaInvalida = true;
    } else {
      this.fechaInvalida = false;
    }

    if (this.user.mail.trim() === '') {
      this.emailInvalido = true;
    } else {
      this.emailInvalido = false;
    }

    if (this.dniInvalido || this.nombreInvalido || this.apellidoInvalido || this.domicilioInvalido ||
      this.passwordInvalido || this.fechaInvalida || this.emailInvalido) {
      return;
    }
    this.enviado = true;
    if (this.myId === '0') {
      this.userService.agregarUsuario(this.user).subscribe(
        usuario => this.route.navigate(['/usuariocreado', usuario, 'agregado']),
        error => this.userService.handleError = <any>error);

      console.log('Paso el agregarUsuario');
    } else {
      console.log('Antes de llamar al modificar usuario');
      this.userService.modificarUsuario(this.user).subscribe(
        usuario =>  this.route.navigate(['/usuariocreado', usuario, 'modificado']),
      );
    }
  }


volver() {
  if (this.myId === '0') {
    this.route.navigate(['/jyaa_2017_grupo28_final']);
  } else {
    this.route.navigate(['/listadousuarios']);
  }

}

constructor(private userService: UsuarioserviceService, private route: Router, private navigateService: NavigationserviceService,
  private router: ActivatedRoute
) {
  console.log('Paso el constructor de altausuario');
}
}


