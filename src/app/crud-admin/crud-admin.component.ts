import { Component } from '@angular/core';
import { finalize } from 'rxjs';
import Swal from 'sweetalert2';
import { PartyService } from '../elements/services/party.service';
import { UsuarioService } from '../elements/services/usuario.service';
import { VideojuegoService } from '../elements/services/videojuego.service';
import decode from 'jwt-decode';
import { TokenStorageService } from '../elements/services/token-storage.service';
import { Router } from '@angular/router';
import { Usuario } from '../models/usuario.model';

@Component({
  selector: 'app-crud-admin',
  templateUrl: './crud-admin.component.html',
  styleUrls: ['./crud-admin.component.css']
})
export class CrudAdminComponent {

  usuario:any={
    apellidos: '',
    apodo: '',
    contrasenia: '',
    email: '',
    nombre: '',
    img_avatar: '',
    rol: ''
  };
  usuarios:any = [];
  videojuegos:any = [];
  chats:any = [];
  token: any;
  token_decoded: any;
  button_clicked:string = "usuarios";
  bol: boolean=false;
  constructor(private usuarioService: UsuarioService, private videojuegoService: VideojuegoService, private partyService: PartyService, private tokenStorageService: TokenStorageService, private router: Router) {}

  ngOnInit() {
    this.usuarioService.getAll().subscribe(result => this.usuarios = result);
    this.token = this.tokenStorageService.getToken();
    if (this.token!=null) {
      this.token_decoded = decode(this.token);
      console.log(this.token_decoded);
    }
    this.usuario=this.usuarioService.getByApodo(this.token_decoded.sub).toPromise();
    if(this.usuario.rol != "admin"){
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'Error\nNo tiene acceso',
        confirmButtonText:'<a href="/home-yeslog" style="text-decoration: none;color:white;">VOLVER</a>',
      });
      this.router.navigate(['/home-yeslog']);
    }
  }

  async mostrarUsuarios() {
    if (this.usuarios !== 'undefined') {
      this.usuarios = await this.usuarioService.getAll().toPromise();
    }
    this.button_clicked = "usuarios";
  }

  async mostrarVideojuegos() {
    if (this.videojuegos !== 'undefined') {
      this.videojuegos = await this.videojuegoService.getAll().toPromise();
    }
    this.button_clicked = "videojuegos";
  }

  async mostrarChats() {
    if (this.chats !== 'undefined') {
      this.chats = await this.partyService.getAll().toPromise();
    }
    this.button_clicked = "chats";
  }

  borrarUsuario(id:number) {
    Swal.fire({
      title: '¿Desea borrar el registro?',
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: 'Borrar',
      denyButtonText: `Cancelar`,
    }).then((result) => {
      if (result.isConfirmed) {
        this.usuarioService.delete(id).pipe(finalize( () => this.mostrarUsuarios())).subscribe(response => {
          console.log(response);
        });
      } else if (result.isDenied) {
      }
    })

  }

  borrarVideojuego(id:number) {
      Swal.fire({
        title: '¿Desea borrar el registro?',
        showDenyButton: true,
        showCancelButton: false,
        confirmButtonText: 'Borrar',
        denyButtonText: `Cancelar`,
      }).then((result) => {
        if (result.isConfirmed) {
          this.videojuegoService.delete(id).pipe(finalize( () => this.mostrarVideojuegos())).subscribe(response => {
            console.log(response);
            });
        } else if (result.isDenied) {
        }
      })

  }

  borrarChat(id:number) {

    Swal.fire({
      title: '¿Desea borrar el registro?',
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: 'Borrar',
      denyButtonText: `Cancelar`,
    }).then((result) => {
      if (result.isConfirmed) {
        this.partyService.delete(id).pipe(finalize( () => this.mostrarChats())).subscribe(response => {
          console.log(response);
        });
      } else if (result.isDenied) {
      }
    })

  }
}
