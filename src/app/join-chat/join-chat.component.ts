
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PartyService } from '../elements/services/party.service';
import { Party } from '../models/party.model';
import { MychatsComponent } from '../mychats/mychats.component';
@Component({
  selector: 'app-join-chat',
  templateUrl: './join-chat.component.html',
  styleUrls: ['./join-chat.component.css']
})
export class JoinChatComponent {

  constructor(private partyService: PartyService) {}

  chats:any = [];

  nombre:string = "";

  buscar(){

    const nombre_chat = this.nombre;

    this.partyService.findByNombre(nombre_chat).subscribe(result => this.chats = result);

  }
}
