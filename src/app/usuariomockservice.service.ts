import { Injectable } from '@angular/core';
import { Usuario } from './Usuario';

@Injectable()
export class UsuariomockserviceService {
static usuarios: Usuario[] = [new Usuario(0, '30978654', 'Juan', 'Jimenez', 'calle 130 nro 346',
     '04-09-1997', 'M', 'juan.jimenez@hotmail.com', 'password1'),
new Usuario(0, '39876654', 'Roberto', 'Sanchez', 'calle 120 nro 0987',
     '24-01-1997', 'M', 'roberto.sanchez@hotmail.com', 'password1') ];
  constructor( ) {

   }

}
