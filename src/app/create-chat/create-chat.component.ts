import { Component } from '@angular/core';
import { VideojuegoService } from '../elements/services/videojuego.service';
import { PartyService } from '../elements/services/party.service';
import { Party } from '../models/party.model';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-create-chat',
  templateUrl: './create-chat.component.html',
  styleUrls: ['./create-chat.component.css']
})
export class CreateChatComponent {

  nombre: string = "";
  id_videojuego: any= 0;

  videojuegos:any = [];

  constructor(private videojuegoService: VideojuegoService, private partyService: PartyService) {}

  ngOnInit() {
    this.videojuegoService.getAll().subscribe(result => this.videojuegos = result)
  }

  async guardarParty() {
    const data = await this.videojuegoService.get(this.id_videojuego).toPromise();

    if(this.nombre!="" && this.id_videojuego !=0){
      const party: Party = {
        nombre: this.nombre,
        videojuego: data
      }
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Chat creado con éxito',
        confirmButtonText:'<a href="/my-chats" style="text-decoration: none;color:white;">ACEPTAR</a>'
      })

      this.partyService.create(party).subscribe(response => {
        console.log(response);
      });

    }else {
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'Error al crear el chat',
        showConfirmButton: false,
        timer: 2000
      })
    }
  }
}

