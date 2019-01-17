import { Injectable } from '@angular/core';

@Injectable()
export class HostService {
  // Por ahora queda asi porque estoy en desarrollo



  constructor() { }

  get host() {
    return 'http://localhost:8085';
  }

  set host(value)  {
    this.host = value;
  }
}
