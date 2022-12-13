import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { VideojuegoService } from '../elements/services/videojuego.service';
import { PartyService } from '../elements/services/party.service';
import { Party } from '../models/party.model';

@Component({
  selector: 'app-create-chat',
  templateUrl: './create-chat.component.html',
  styleUrls: ['./create-chat.component.css']
})
export class CreateChatComponent {

  chat: Party = {
    nombre: '',
    id_videojuego: null,
  }

  constructor(private videojuegoService: VideojuegoService, private partyService: PartyService) {}

  videojuegos:any = [];

  ngOnInit() {
    this.videojuegoService.getAll().subscribe(result => this.videojuegos = result)
  }

  guardarParty() {
    const data = {
      nombre: this.chat.nombre,
      videojuego: this.chat.id_videojuego,
    };

    this.partyService.create(data).subscribe(response => {
      console.log(response);
    },
    error => {
      console.log(error)
    })
  }

}
