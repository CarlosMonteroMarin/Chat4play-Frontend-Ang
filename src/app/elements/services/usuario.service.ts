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
    return this.http.get<Usuario[]>('https://proyecto-bbdd-production-faf3.up.railway.app/usuarios');
  }

  get(id: any) {
    return this.http.get('https://proyecto-bbdd-production-faf3.up.railway.app/usuario/'+id);
  }

  post(data: any){
    return this.http.post('https://proyecto-bbdd-production-faf3.up.railway.app/register',data);
  }

  put(id:any, data: any){
    return this.http.put(`https://proyecto-bbdd-production-faf3.up.railway.app/usuario/${id}`, data);
  }

  delete(id: any) {
    return this.http.delete('https://proyecto-bbdd-production-faf3.up.railway.app/usuario/'+id);
  }
}
