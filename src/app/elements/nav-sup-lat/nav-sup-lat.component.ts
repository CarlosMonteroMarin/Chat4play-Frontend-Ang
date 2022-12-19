import { Component } from '@angular/core';
import { TokenStorageService } from '../services/token-storage.service';
import { UsuarioService } from '../services/usuario.service';
import decode from 'jwt-decode';

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

  token: any;
  token_decoded: any;

  constructor(private usuarioService: UsuarioService, private tokenStorageService: TokenStorageService) {

  }

  async ngOnInit() {
    this.token = this.tokenStorageService.getToken();
    if (this.token!=null) {
      this.token_decoded = decode(this.token);
    }
    console.log(this.token_decoded.sub);
    this.usuario = await this.usuarioService.getByApodo(this.token_decoded.sub).toPromise();
    console.log(this.usuario);
  }

  cerrarSesion(){
    this.tokenStorageService.signOut();
  }
}

