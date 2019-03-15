import { Component, OnInit } from '@angular/core';
import { Prestamo } from '../prestamo';
import { BicicletaserviceService } from '../bicicletaservice.service';
import { ActivatedRoute } from '@angular/router';
import { NavigationserviceService } from '../navigationservice.service';
import { PrestamoserviceService } from '../prestamoservice.service';
import { UsuarioserviceService } from '../usuarioservice.service';
import { Usuario } from '../Usuario';

@Component({
  selector: 'app-devolverbicicleta',
  templateUrl: './devolverbicicleta.component.html',
  styleUrls: ['./devolverbicicleta.component.css']
})
export class DevolverbicicletaComponent implements OnInit {
  public misPrestamos: Prestamo[] = [];
  miNombre: string;
  enviado = false;
  user: Usuario;
  constructor(private bicicletaService: BicicletaserviceService, private route: ActivatedRoute,
    private navigateService: NavigationserviceService, private prestamoService: PrestamoserviceService,
    private usuarioService: UsuarioserviceService) {

   }

  ngOnInit() {
    this.enviado = false;
    this.prestamoService.getMisBicicletas(this.route.snapshot.params['id']).subscribe(
           data => { this.misPrestamos = data,
           this.usuarioService.getUser(this.route.snapshot.params['id']).subscribe(
            us => this.miNombre = us.nombres + ' ' + us.apellido
           );
        }
);
  }

devolver(prestamo) {
  this.enviado = true;
  if (prestamo.denunciada) {
  this.prestamoService.devolverBicicletaConDenuncia(prestamo).subscribe(
      bicis => this.misPrestamos = bicis
    );
    } else {

  this.prestamoService.devolverBicicletaSinDenuncia(prestamo).subscribe(
      bicis => this.misPrestamos = bicis
    );
    }
}

  volver() {
    this.navigateService.volver('/usuarioview' + '/' + this.route.snapshot.params['id'] , '');
}

}
