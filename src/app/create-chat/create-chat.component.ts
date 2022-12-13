import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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
    const response = await fetch('https://proyecto-bbdd-production-36ba.up.railway.app/api/videojuego/'+this.id_videojuego);
    const data = await response.json();

    if(this.nombre!="" && this.id_videojuego !=0){
      const party: Party = {
        nombre: this.nombre,
        videojuego: data
      }
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Chat creado con éxito',
        showConfirmButton: false,
        timer: 2000
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

