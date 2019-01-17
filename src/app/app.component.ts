

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './login.service';
import { SessionStorageService } from 'ngx-webstorage';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [
    ]
})
export class AppComponent {
  private dni = '';
  private password = '';
  title = 'app';

  constructor(private loginService: LoginService, private localSt: SessionStorageService, private route: Router) {

  }

login(dni, password) {
  this.loginService.login(dni, password).subscribe(data => {
    this.localSt.store('local-key', data.authorization);
    const l = this.localSt.retrieve('local-key');
    console.log('Este es el valor guardado en localstore: ' + l);
    console.log('Esta es la catgoria que viene del servicio: ' + data.categoria);
    if (data.categoria === 1) {
      this.route.navigate(['usuarioview']);
    }
    if (data.categoria === 2) {
       this.route.navigate(['/administradorview']);
    }
  });
}

}

