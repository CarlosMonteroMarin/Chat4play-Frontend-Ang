import { Component } from '@angular/core';
import { PartyService } from '../elements/services/party.service';

@Component({
  selector: 'app-mychats',
  templateUrl: './mychats.component.html',
  styleUrls: ['./mychats.component.css']
})
export class MychatsComponent {

  nombre: string="";
  videojuego: any="";

  chats: any = null;

  constructor (private partyService: PartyService,){}


  ngOnInit() {
    this.partyService.getAll().subscribe(result => this.chats = result)
  }

  joinChat(){

  }
}
