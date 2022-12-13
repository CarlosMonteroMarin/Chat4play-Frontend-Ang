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

  constructor(private videojuegoService: VideojuegoService, private partyService: PartyService) {}

  videojuegos:any = [];

  ngOnInit() {
    this.videojuegoService.getAll().subscribe(result => this.videojuegos = result)
  }

  nombre: string = "";
  id_videojuego: number = 0;

  guardarParty() {

    const chat: Party = {
      nombre: this.nombre,
      id_videojuego: this.id_videojuego,
    }

    this.partyService.create(chat).subscribe(response => {
      console.log(response);
    },
    error => {
      console.log(error)
    })
  }

}
