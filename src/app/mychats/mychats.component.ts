import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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

  constructor (private partyService: PartyService, private route:ActivatedRoute){}


  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');

    this.partyService.getAll().subscribe(result => this.chats = result)
    this.partyService.get(id).subscribe(result => this.chats = result)
  }
}
