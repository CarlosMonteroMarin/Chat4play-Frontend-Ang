import { Component } from '@angular/core';
import { PartyService } from '../elements/services/party.service';
import { UsuarioService } from '../elements/services/usuario.service';
import { VideojuegoService } from '../elements/services/videojuego.service';

@Component({
  selector: 'app-crud-admin',
  templateUrl: './crud-admin.component.html',
  styleUrls: ['./crud-admin.component.css']
})
export class CrudAdminComponent {

  usuarios:any = [];
  videojuegos:any = [];
  chats:any = [];

  button_clicked:string = "usuarios";

  constructor(private usuarioService: UsuarioService, private videojuegoService: VideojuegoService, private partyService: PartyService) {}

  ngOnInit() {
    this.usuarioService.getAll().subscribe(result => this.usuarios = result)
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
    this.usuarioService.delete(id).subscribe(response => {
      console.log(response);
    },
    error => {
      console.log(error);
    })
  }

  borrarVideojuego(id:number) {
    this.videojuegoService.delete(id).subscribe(response => {
      console.log(response);
    },
    error => {
      console.log(error);
    })
  }

  borrarChat(id:number) {
    this.partyService.delete(id).subscribe(response => {
      console.log(response);
    },
    error => {
      console.log(error);
    })
  }
}
