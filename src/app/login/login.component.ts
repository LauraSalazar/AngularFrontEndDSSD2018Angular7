import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { SessionStorageService } from 'ngx-webstorage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
   dni = '';
   password = '';
  title = 'app';
  ngOnInit() {

  }

  constructor(private loginService: LoginService, private localSt: SessionStorageService, private route: Router) {

  }

login(dni, password) {
  if (dni != null  && password != null && dni !== '' && password !== '') {
  this.loginService.login(dni, password).subscribe(data => {
    this.localSt.store('local-key', data.authorization);
    const l = this.localSt.retrieve('local-key');

    console.log('Este es el valor guardado en localstore: ' + l);
    console.log('Esta es la catgoria que viene del servicio: ' + data.categoria);

    this.localSt.store('categoria', data.categoria);
    this.dni = '';
    this.password = '';
    if (data.categoria === 1) {
      this.route.navigate(['usuarioview', data.usuario]);
    }
    if (data.categoria === 2) {
       this.route.navigate(['/administradorview']);
    }
  });
}
}

}
