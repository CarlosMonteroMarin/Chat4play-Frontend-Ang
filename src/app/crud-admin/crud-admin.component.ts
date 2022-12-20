import { Component } from '@angular/core';
import { finalize } from 'rxjs';
import Swal from 'sweetalert2';
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
  bol: boolean=false;
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
