import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
import { UsuarioService } from '../elements/services/usuario.service';
import { Usuario } from '../models/usuario.model';

@Component({
  selector: 'app-edit-usuarios',
  templateUrl: './edit-usuarios.component.html',
  styleUrls: ['./edit-usuarios.component.css']
})
export class EditUsuariosComponent {

  nombre: string="";
  apellidos: string="";
  apodo: string = "";
  email: string = "";
  contrasenia: string ="";
  confirm_contra: string = "";

  usuario: any;

  constructor(private usuarioService: UsuarioService, private route: ActivatedRoute) {}

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    this.usuarioService.get(id).subscribe(result => this.usuario = result);
  }

  modificarUsuario() {
    if((!this.nombre)){this.nombre=this.usuario.nombre}

    if((!this.apellidos)){this.apellidos=this.usuario.apellidos}

    if((!this.nombre)){this.nombre=this.usuario.nombre}

    if((!this.apodo)){this.apodo=this.usuario.apodo}

    if((!this.email)){this.email=this.usuario.email}

    if((!this.contrasenia)){this.contrasenia=this.usuario.contrasenia}

    if(this.nombre !="" && this.apellidos !="" && this.apodo !="" && this.email !=""){
        const usuario_aux : any = {
          nombre: this.nombre,
          apellidos: this.apellidos,
          apodo: this.apodo,
          email: this.email,
          contrasenia: this.usuario.contrasenia
        };

        console.log(usuario_aux);

        this.usuarioService.put(this.usuario.id_usuario, usuario_aux).subscribe(response => {
          console.log(response);
          });
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Usuario modificado correctamente',
          confirmButtonText:'<a href="/crud-admin" style="text-decoration: none;color:white;">VOLVER</a>',
        })
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
