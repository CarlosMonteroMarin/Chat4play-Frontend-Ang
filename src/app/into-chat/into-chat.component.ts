import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
import { MensajesService } from '../elements/services/mensajes.service';
import { PartyService } from '../elements/services/party.service';
import { TokenStorageService } from '../elements/services/token-storage.service';
import { UsuarioService } from '../elements/services/usuario.service';
import { Mensajes } from '../models/mensajes.model';
import decode from 'jwt-decode';
import * as moment from 'moment';

@Component({
  selector: 'app-into-chat',
  templateUrl: './into-chat.component.html',
  styleUrls: ['./into-chat.component.css']
})
export class IntoChatComponent {
  constructor(private http: HttpClient, private mensajesService: MensajesService, private partyService: PartyService, private usuarioService: UsuarioService, private route: ActivatedRoute, private tokenStorageService: TokenStorageService) {}

  chat:any = null;

  texto_mensaje:string="";

  party:any;

  usuario:any;

  mensajes:any;

  token:any;
  token_decoded:any;

  async ngOnInit() {

    this.token = this.tokenStorageService.getToken();
    if (this.token!=null) {
      this.token_decoded = decode(this.token);
    }
    console.log(this.token_decoded.sub);
    this.usuario = await this.usuarioService.getByApodo(this.token_decoded.sub).toPromise();
    console.log(this.usuario.img_avatar);

    let id = this.route.snapshot.paramMap.get('id');
    this.partyService.get(id).subscribe(result => this.party = result);
    this.mensajes = await this.mensajesService.getAll().toPromise();
    this.mensajes.reverse();

    setTimeout(() => this.ngOnInit(), 5000);
  }

  async enviarMensaje() {
    let fecha = moment().format('LT');

    if(this.texto_mensaje !="") {
      const mensaje_aux : Mensajes = {
        mensaje: this.texto_mensaje,
        party: this.party,
        usuario: this.usuario,
        fecha: fecha,
      };

      console.log(mensaje_aux);

      await this.mensajesService.create(mensaje_aux).toPromise();

      this.texto_mensaje = "";
      this.ngOnInit();
    }
  }
}
