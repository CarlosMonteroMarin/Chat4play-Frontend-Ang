import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-into-chat',
  templateUrl: './into-chat.component.html',
  styleUrls: ['./into-chat.component.css']
})
export class IntoChatComponent {
  constructor(private http: HttpClient) {}

  chat:any = null;

  ngOnInit() {
    this.http.get("https://proyecto-bbdd-production-36ba.up.railway.app/api/party")
    .subscribe(
      result => {
        this.chat = result;
        console.log(this.chat);
      },
      error => {
        console.log("No se han podido seleccionar los chats");
      }
    );
  }
}
