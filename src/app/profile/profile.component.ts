import { Component } from '@angular/core';
import { UsuarioService } from '../elements/services/usuario.service';
import { Usuario } from '../models/usuario.model';
import Swal from 'sweetalert2';
import { fromEvent, delay } from 'rxjs';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

   usuario: any = {
    nombre: '',
    apellidos: '',
    apodo: '',
    contrasenia: '',
    email: ''
  }

    nombre:string|any='';
    apellidos:string|any='';
    apodo:string|any='';
    contrasenia:string|any='';
    email:string|any='';

  constructor(private usuarioService: UsuarioService) {

  }

  ngOnInit() {
    this.usuarioService.get(10).subscribe(result => this.usuario = result);
  }


  guardarInfo(){


    //Comprobar cual de ellos no es vacio entonces significa que se ha cambiado
    const usuario_aux: Usuario={
      nombre:this.nombre,
      apellidos:this.apellidos,
      apodo:this.apodo,
      contrasenia:this.contrasenia,
      email:this.email,
    }

    this.usuarioService.put(10,usuario_aux).subscribe(result => console.log(result));
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Perfil modificado!',
      confirmButtonText:'<a href="/home-yeslog" style="text-decoration: none;color:white;">VOLVER</a>',
    })
  }
}
