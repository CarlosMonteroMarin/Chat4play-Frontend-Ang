import { Component } from '@angular/core';
import { UsuarioService } from '../elements/services/usuario.service';
import { Usuario } from '../models/usuario.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  nombre: string="";
  apellidos: string="";
  apodo: string = "";
  email: string = "";
  contrasenia: string ="";
  confirm_contra: string = "";

  listaUsuarios : Usuario[] | null=null;

  constructor(private usuarioService: UsuarioService) {}

  register(): void {
    if(this.nombre !="" && this.apellidos !="" && this.apodo !="" && this.email !="" && this.contrasenia !="" && this.confirm_contra !=""){
      if (this.contrasenia == this.confirm_contra){
        const usuario : Usuario = {
          nombre: this.nombre,
          apellidos: this.apellidos,
          apodo: this.apodo,
          email: this.email,
          contrasenia: this.contrasenia
        };

        this.usuarioService.post(usuario).subscribe(response => {
          console.log(response);
          });
          alert("Usuario registrado correctamente")
      }else{
        alert("Las contraseñas no coinciden.");
      }
    }else{
      alert("Complete todos los campos.");
    }
  }
}
