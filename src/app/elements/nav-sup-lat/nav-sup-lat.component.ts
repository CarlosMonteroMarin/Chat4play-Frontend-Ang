import { Component } from '@angular/core';
import { UsuarioService } from '../services/usuario.service';

@Component({
  selector: 'app-nav-sup-lat',
  templateUrl: './nav-sup-lat.component.html',
  styleUrls: ['./nav-sup-lat.component.css']
})
export class NavSupLatComponent {
  usuario: any = {
    nombre: '',
    apellidos: '',
    apodo: '',
    contrasenia: '',
    email: '',
    img_avatar:''
  }

  constructor(private usuarioService: UsuarioService) {

  }

  ngOnInit() {
    this.usuarioService.get(1).subscribe(result => this.usuario = result);
  }
}
