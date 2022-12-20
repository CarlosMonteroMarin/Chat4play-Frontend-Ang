import { Component } from '@angular/core';
import { UsuarioService } from '../elements/services/usuario.service';
import { Usuario } from '../models/usuario.model';
import decode from 'jwt-decode';
import Swal from 'sweetalert2';
import { fromEvent, delay } from 'rxjs';
import { TokenStorageService } from '../elements/services/token-storage.service';

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
    img_avatar:'',
    rol: ''
  }

  nombre:string|any='';
  apellidos:string|any='';
  apodo:string|any='';
  contrasenia:string|any='';
  email:string|any='';
  img_avatar:string|any='';
  rol: string|any='';

  selectedOption:string|any='';
  url="../assets/images/avatares/logo_azul.png";

  token: any;
  token_decoded: any;

  constructor(private usuarioService: UsuarioService, private tokenStorageService: TokenStorageService) {

  }

  async ngOnInit() {
    this.token = this.tokenStorageService.getToken();
    if (this.token!=null) {
      this.token_decoded = decode(this.token);
    }
    console.log(this.token_decoded.sub);
    this.usuario = await this.usuarioService.getByApodo(this.token_decoded.sub).toPromise();
  }

  onSelected(value:string){
    switch(value){
      case 'Avatar azul': {this.img_avatar="../../assets/images/avatares/logo_azul.png";break;};
      case 'Avatar amarillo': {this.img_avatar="../../assets/images/avatares/logo_amarillo.png";break;};
      case 'Avatar verde': {this.img_avatar="../../assets/images/avatares/logo_verde.png";break;};
      case 'Avatar rosa': {this.img_avatar="../../assets/images/avatares/logo_rosa.png";break;};
      case 'Avatar rojo': {this.img_avatar="../../assets/images/avatares/logo_rojo.png";break;};
      case 'Avatar cian': {this.img_avatar="../../assets/images/avatares/logo_cian.png";break;};

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

    if((!this.rol)){this.rol=this.usuario.rol}


    const usuario_aux: Usuario={
      nombre:this.nombre,
      apellidos:this.apellidos,
      apodo:this.apodo,
      contrasenia:this.contrasenia,
      email:this.email,
      img_avatar:this.img_avatar,
      rol: this.rol
    }

    this.usuarioService.put(this.usuario.id_usuario,usuario_aux).subscribe(result => console.log(result));
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Perfil modificado!',
      confirmButtonText:'<a href="/home-yeslog" style="text-decoration: none;color:white;">VOLVER</a>',
    })
  }
}
