import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Party } from 'src/app/models/party.model';
import { Usuario } from 'src/app/models/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class PartyUsuarioService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Party[]> {
    return this.http.get<Party[]>('https://proyecto-bbdd-production-faf3.up.railway.app/api/party');
  }
}
