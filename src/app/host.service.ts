import { Injectable } from '@angular/core';

@Injectable()
export class HostService {
  // Por ahora queda asi porque estoy en desarrollo



  constructor() { }

  get host() {
    // Desarrollo  return 'http://localhost:8085/jyaa_2017_grupo28_final/rest';
    return 'http://java.linti.unlp.edu.ar/jyaa_2017_grupo28_final/rest';
  }

  set host(value)  {
    this.host = value;
  }
}
