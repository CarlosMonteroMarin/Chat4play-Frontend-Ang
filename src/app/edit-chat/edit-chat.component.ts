import { Component, Input } from '@angular/core';
import { VideojuegoService } from '../elements/services/videojuego.service';
import { PartyService } from '../elements/services/party.service';
import { Party } from '../models/party.model';
import Swal from 'sweetalert2';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-chat',
  templateUrl: './edit-chat.component.html',
  styleUrls: ['./edit-chat.component.css']
})
export class EditChatComponent {
  nombre: string = "";
  id_videojuego: any= 0;
  chat: any;

  videojuegos:any = [];

  constructor(private videojuegoService: VideojuegoService, private partyService: PartyService, private route: ActivatedRoute) {}

  async ngOnInit() {
    this.videojuegoService.getAll().subscribe(result => this.videojuegos = result);
    let id = this.route.snapshot.paramMap.get('id');
    this.chat = await this.partyService.get(id).toPromise();
    this.id_videojuego = this.chat.videojuego.id_videojuego;
  }

  async modificarParty() {
    const data = await this.videojuegoService.get(this.id_videojuego).toPromise();

    //Comprobar cual de ellos no es vacio entonces significa que se ha cambiado
    if((!this.nombre)){this.nombre=this.chat.nombre}

    if((!this.id_videojuego)){this.id_videojuego=this.chat.videojuego.id_videojuego}

    if(this.nombre!="" && this.id_videojuego !=0) {
      const chat_aux: Party={
        nombre:this.nombre,
        videojuego:data,
      }

      this.partyService.put(this.chat.id_party, chat_aux).subscribe(result => console.log(result));

      console.log(chat_aux);

      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Chat modificado!',
        confirmButtonText:'<a href="/crud-admin" style="text-decoration: none;color:white;">VOLVER</a>',
      })
    }
  }
}
