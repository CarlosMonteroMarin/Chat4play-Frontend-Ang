import { Component } from '@angular/core';
import { UsuarioService } from '../elements/services/usuario.service';
import { Router } from '@angular/router';
import { TokenStorageService } from '../elements/services/token-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  apodo: any;
  contrasenia: any;

  constructor(private usuarioService: UsuarioService, private tokenStorageService: TokenStorageService, private router: Router) {}

  async logear(){
    const usuario : any = {
      apodo: this.apodo,
      contrasenia: this.contrasenia
    };
    this.usuarioService.login(usuario).subscribe((response: any) => {
      this.tokenStorageService.saveToken(response.token);
      });
    await this.delay(1500);
    if (window.sessionStorage.getItem("auth-token")!=null) {
      this.router.navigate(['/home-yeslog']);
    }
  }

  delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
  }
}
