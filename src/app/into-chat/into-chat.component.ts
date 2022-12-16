import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
import { MensajesService } from '../elements/services/mensajes.service';
import { PartyService } from '../elements/services/party.service';
import { UsuarioService } from '../elements/services/usuario.service';
import { Mensajes } from '../models/mensajes.model';

@Component({
  selector: 'app-into-chat',
  templateUrl: './into-chat.component.html',
  styleUrls: ['./into-chat.component.css']
})
export class IntoChatComponent {
  constructor(private http: HttpClient, private mensajesService: MensajesService, private partyService: PartyService, private usuarioService: UsuarioService, private route: ActivatedRoute) {}

  chat:any = null;

  texto_mensaje:string="";

  party:any;

  usuario:any;

  mensajes:any;

  padTo2Digits(num:number) {
    return num.toString().padStart(2, '0');
  }

  formatDate(date: Date) {
    return (
      [
        this.padTo2Digits(date.getDate()),
        this.padTo2Digits(date.getMonth() + 1),
        date.getFullYear(),
      ].join('/') +
      ' ' +
      [
        this.padTo2Digits(date.getHours()),
        this.padTo2Digits(date.getMinutes()),
        this.padTo2Digits(date.getSeconds()),
      ].join(':')
    );
  }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    this.partyService.get(id).subscribe(result => this.party = result);
    this.usuarioService.get(1).subscribe(result => this.usuario = result);
    this.mensajesService.getAll().subscribe(result => this.mensajes = result);
  }

  enviarMensaje() {
    let fecha = this.formatDate(new Date());

    if(this.texto_mensaje !="") {
      const mensaje_aux : Mensajes = {
        mensaje: this.texto_mensaje,
        party: this.party,
        usuario: this.usuario,
        fecha: fecha,
      };

      console.log(mensaje_aux);

      this.mensajesService.create(mensaje_aux).subscribe(response => {
        console.log(response);
      });

      this.texto_mensaje = "";
    }
  }
}
