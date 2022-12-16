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
    return this.http.get<Videojuego[]>('https://proyecto-bbdd-production-faf3.up.railway.app/api/videojuego');
  }

  get(id: any) {
    return this.http.get('https://proyecto-bbdd-production-faf3.up.railway.app/api/videojuego/'+id);
  }

  post(data: any){
    return this.http.post('https://proyecto-bbdd-production-faf3.up.railway.app/api/videojuego',data);
  }

  put(id:any, data: any){
    return this.http.put(`https://proyecto-bbdd-production-faf3.up.railway.app/api/videojuego/${id}`, data);
  }

  delete(id: any) {
    return this.http.delete('https://proyecto-bbdd-production-faf3.up.railway.app/api/videojuego/'+id);
  }
}
