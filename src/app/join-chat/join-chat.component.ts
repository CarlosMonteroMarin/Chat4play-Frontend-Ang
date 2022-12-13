import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-join-chat',
  templateUrl: './join-chat.component.html',
  styleUrls: ['./join-chat.component.css']
})
export class JoinChatComponent {
  constructor(private http: HttpClient) {}

  chats:any = [];

  ngOnInit() {
    this.http.get("https://proyecto-bbdd-production-36ba.up.railway.app/api/party")
    .subscribe(
      result => {
        this.chats = result;
        console.log(this.chats);
      },
      error => {
        console.log("No se han podido seleccionar los chats");
      }
    );
  }

}
