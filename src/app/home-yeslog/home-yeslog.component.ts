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

  ngOnInit() {
    if (window.sessionStorage.getItem("firstLogin")==null) {
      window.sessionStorage.setItem("firstLogin", "no");
      window.location.reload();
    }
    else {
      return;
    }
  }
}
