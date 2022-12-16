import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import { UsuarioService } from '../elements/services/usuario.service';
import { Usuario } from '../models/usuario.model';

@Component({
  selector: 'app-register-usuario',
  templateUrl: './register-usuario.component.html',
  styleUrls: ['./register-usuario.component.css']
})
export class RegisterUsuarioComponent {
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
        const usuario : any = {
          nombre: this.nombre,
          apellidos: this.apellidos,
          apodo: this.apodo,
          email: this.email,
          contrasenia: this.contrasenia
        };

        this.usuarioService.post(usuario).subscribe(response => {
          console.log(response);
          });
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Usuario registrado correctamente',
            confirmButtonText:'<a href="/crud-admin" style="text-decoration: none;color:white;">VOLVER</a>',
          })
      }else{
        Swal.fire({
          position: 'center',
          icon: 'error',
          title: 'Error\nLas contraseñas no coinciden',
          showConfirmButton: false,
          timer: 2000
        })
      }
    }else{
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'Error\nComplete todos los campos',
        showConfirmButton: false,
        timer: 2000
      })
    }
  }
}
