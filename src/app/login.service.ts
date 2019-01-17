import { HttpClient } from '@angular/common/http';
import { HostService } from './host.service';
import { SessionStorageService } from 'ngx-webstorage';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient, private host: HostService, private localSt: SessionStorageService) { }

  login(dni: string, password: string): Observable<any> {
   return this.http.get<any>(this.host.host + '/LaPlataEnBici/rest/loginAuth/loginService/' + dni + '/' + password );
  }
}
