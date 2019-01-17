import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HostService } from '../host.service';
import { SessionStorageService } from 'ngx-webstorage';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usuarioview',
  templateUrl: './usuarioview.component.html',
  styleUrls: ['./usuarioview.component.css']
})
export class UsuarioviewComponent implements OnInit {

  private esUsuario: boolean;
  private myId;

  constructor(private http: HttpClient, private host: HostService, private localSt: SessionStorageService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    console.log('Este es el valor de categoria de la session: ' + this.localSt.retrieve('categoria'));
      this.esUsuario = (this.localSt.retrieve('categoria') === 1);
      this.myId = this.route.snapshot.params['id'];
  }

}
