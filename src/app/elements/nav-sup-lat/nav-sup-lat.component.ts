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
  usuario: any;

  token: any;
  token_decoded: any;
  contador: number = 0;

  constructor(private usuarioService: UsuarioService, private tokenStorageService: TokenStorageService) {

  }

  async ngOnInit() {
    console.log(this.tokenStorageService.getToken());
    this.token = this.tokenStorageService.getToken();
    if (this.token!=null) {
      this.token_decoded = decode(this.token);
      console.log(this.token_decoded);
    }
    this.usuarioService.getByApodo(this.token_decoded.sub).subscribe(result => this.usuario = result);
    console.log(this.usuario);
  }

  delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
  }

  cerrarSesion(){
    this.tokenStorageService.signOut();
  }
}

