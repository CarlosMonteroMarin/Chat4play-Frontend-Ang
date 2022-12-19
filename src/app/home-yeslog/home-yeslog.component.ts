import { Component } from '@angular/core';
import decode from 'jwt-decode';
import { TokenStorageService } from '../elements/services/token-storage.service';
import { UsuarioService } from '../elements/services/usuario.service';

@Component({
  selector: 'app-home-yeslog',
  templateUrl: './home-yeslog.component.html',
  styleUrls: ['./home-yeslog.component.css']
})
export class HomeYeslogComponent {

  token: string | null = "";

  usuario : any;

  token_decoded: any;

  current_user: any;

  constructor(private usuarioService: UsuarioService, private tokenStorageService: TokenStorageService) {}

  async ngOnInit() {
    this.token = this.tokenStorageService.getToken();
    if (this.token!=null) {
      this.token_decoded = decode(this.token);
    }
    console.log(this.token_decoded.sub);
    this.usuario = await this.usuarioService.getByApodo(this.token_decoded.sub).toPromise();
    console.log(this.usuario);
    /*this.token = window.sessionStorage.getItem("auth-token");
    if (this.token!=null){
      this.usuario = jwt_decode(this.token);
      console.log(this.usuario.sub);
      this.usuarioService.getByApodo(this.usuario.sub).subscribe(result => console.log(result));
    }*/
  }
}
