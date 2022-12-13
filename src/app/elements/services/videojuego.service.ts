import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Videojuego } from 'src/app/models/videojuego.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VideojuegoService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Videojuego[]> {
    return this.http.get<Videojuego[]>('https://proyecto-bbdd-production-36ba.up.railway.app/api/videojuego');
  }

  get(id: any) {
    return this.http.get('https://proyecto-bbdd-production-36ba.up.railway.app/api/videojuego/'+id);
  }
}
