import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpEvent, HttpRequest, HttpParams, HttpInterceptor , HttpResponse, HttpHeaderResponse, HttpHandler} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Login } from './Login';
import { catchError, tap, map } from 'rxjs/operators';
import { Proceso } from './Proceso';
import { ProcessId } from './ProcessId';
import { CookieService } from 'ngx-cookie-service';
import { Instance } from './Instance';

interface MyToken{
  copyright: string,
  user_id: string,
  user_name: string,
  session_id: string,
  conf: string,
  is_technical_user: string,
  version: string
}

interface ProcesoResponse{
  displayDescription: string,
  deploymentDate: string,
  displayName: string,
  name: string,
  description: string,
  deployedBy: string,
  id: string,
  activationState: string,
  version: string,
  configurationState: string,
  last_update_date: string,
  actorinitiatorid: string
}

@Injectable({
  providedIn: 'root'
})
export class BonitaserviceService {

  instance: Instance;

  iniciarProceso(idProceso,cupon,empleado,producto) {

    //idProceso
    this.http.get<Instance>('http://localhost:8084/iniciarProceso/'+idProceso+'/'+cupon+'/'+empleado+'/'+producto)
    .subscribe(resp => {
      this.instance = resp;
        console.log('Esto viene desde java: ' + resp) ;
      });


   }

 devolverIdProceso(idProceso) {
   console.log('Esto es lo que le llega a Bonita Service' + idProceso);
   return idProceso;
 }

  constructor(private http: HttpClient, private cookieService: CookieService) {  }
}
