import { Injectable } from '@angular/core';

@Injectable()
export class LoggerService {
  logs: string[] = [];
  log(message: string) {
  this.logs.push(message);
  console.log(message);
  }
  constructor() { }

}
