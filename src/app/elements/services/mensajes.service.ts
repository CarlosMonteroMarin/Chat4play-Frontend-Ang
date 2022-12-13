import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Mensajes } from 'src/app/models/mensajes.model';

@Injectable({
  providedIn: 'root'
})
export class MensajesService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Mensajes[]> {
    return this.http.get<Mensajes[]>('https://proyecto-bbdd-production-36ba.up.railway.app/api/mensajes');
  }

  get(id: any) {
    return this.http.get('https://proyecto-bbdd-production-36ba.up.railway.app/api/mensajes/'+id);
  }
}
