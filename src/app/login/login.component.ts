import { Component } from '@angular/core';
import { UsuarioService } from '../elements/services/usuario.service';
import { Router } from '@angular/router';
import { TokenStorageService } from '../elements/services/token-storage.service';
import Swal from 'sweetalert2';

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
    if(this.apodo ==null || this.contrasenia ==null){
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'Error\nComplete todos los campos',
        confirmButtonText:'ACEPTAR',
      });
      this.apodo=null;
      this.contrasenia=null;
    }else {
      await this.delay(1000);
      if (window.sessionStorage.getItem("auth-token")!=null) {
        this.router.navigate(['/home-yeslog']);
      }else{
        Swal.fire({
          position: 'center',
          icon: 'error',
          title: 'Error\nCredenciales incorrectas',
          confirmButtonText:'ACEPTAR',
        });
      }
    }

  }

  delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
  }
}
