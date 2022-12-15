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
    email: '',
    img_avatar:''
  }

    nombre:string|any='';
    apellidos:string|any='';
    apodo:string|any='';
    contrasenia:string|any='';
    email:string|any='';
    img_avatar:string|any='';

    selectedOption:string|any='';
    url="../assets/images_profiles/pregunta.png";

  constructor(private usuarioService: UsuarioService) {

  }

  ngOnInit() {
    this.usuarioService.get(29).subscribe(result => this.usuario = result);
    console.log(this.usuario.nombre)
  }

  onSelected(value:string){
    switch(value){
      case 'Seta': {this.img_avatar="../assets/images_profiles/seta.png";break;};
      case 'Peter': {this.img_avatar="../assets/images_profiles/peter.png";break;};
      case 'Minecraft': {this.img_avatar="../assets/images_profiles/minecraft.png";break;};
      case 'Perro': {this.img_avatar="../assets/images_profiles/perro.png";break;};
      case 'Gato': {this.img_avatar="../assets/images_profiles/gato.png";break;};
    }
      this.url=this.img_avatar;
  }
  guardarInfo(){

    //Comprobar cual de ellos no es vacio entonces significa que se ha cambiado
    if((!this.nombre)){this.nombre=this.usuario.nombre}

    if((!this.apellidos)){this.apellidos=this.usuario.apellidos}

    if((!this.apodo)){this.apodo=this.usuario.apodo}

    if((!this.contrasenia)){this.contrasenia=this.usuario.contrasenia}

    if((!this.email)){this.email=this.usuario.email}

    if((!this.img_avatar)){this.img_avatar=this.usuario.img_avatar}

    const usuario_aux: Usuario={
      nombre:this.nombre,
      apellidos:this.apellidos,
      apodo:this.apodo,
      contrasenia:this.contrasenia,
      email:this.email,
      img_avatar:this.img_avatar
    }

    this.usuarioService.put(29,usuario_aux).subscribe(result => console.log(result));
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Perfil modificado!',
      confirmButtonText:'<a href="/home-yeslog" style="text-decoration: none;color:white;">VOLVER</a>',
    })
  }
}
