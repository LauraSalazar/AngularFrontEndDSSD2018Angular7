import { Injectable } from '@angular/core';
import {
  HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse, HttpHeaders
} from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { SessionStorageService } from 'ngx-webstorage';

/** Pass untouched request through to the next request handler. */
@Injectable()
export class MyInterceptor implements HttpInterceptor {

  constructor(private localSt: SessionStorageService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler):
    Observable<HttpEvent<any>> {
    console.log('hola desde interceptor');
    console.log('Este es el valor de la key desde interceptor' + this.localSt.retrieve('local-key'));
    const cloneReq = req.clone({});
    return next.handle(cloneReq);


  }
}
