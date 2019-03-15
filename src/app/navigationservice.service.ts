import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SessionStorageService} from 'ngx-webstorage';

@Injectable({
  providedIn: 'root'
})
export class NavigationserviceService {

  constructor(private router: Router, private localSt: SessionStorageService) {
  }
  volver(userview, administratorview) {
    // Es un administrador
    const categoria = this.localSt.retrieve('categoria');
    if (categoria === 2) {
      this.router.navigate([administratorview]);
    }
    if (categoria === 1) {
      this.router.navigate([userview]);
    }
    if (categoria === 0) {
      this.router.navigate(['/noallowed']);
    }
    }
}

