import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from 'src/app/models/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>('https://proyecto-bbdd-production-36ba.up.railway.app/api/usuarios');
  }

  get(id: any) {
    return this.http.get('https://proyecto-bbdd-production-36ba.up.railway.app/api/usuario/'+id);
  }
}
