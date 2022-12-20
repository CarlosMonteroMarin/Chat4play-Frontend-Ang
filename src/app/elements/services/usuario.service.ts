import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from 'src/app/models/usuario.model';


const httpOptions = {
  headers: new HttpHeaders({ 'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJpYXQiOjE2NjkwMzA4NDYsImlzcyI6IkpvZWwgZGVsIE9sbW8iLCJzdWIiOiJqb2VsIiwiZXhwIjoxNjY5ODk0ODQ2fQ.tkZ-Yts-qufwE5YZLeZhrGlq9HOPJm_hVxDWeJ6ZEmPs6OZlGI1QXs5F-YRL_LgEfhEGlMLkDCUemcgeNPtbKA'})
};

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>('https://proyecto-bbdd-production-faf3.up.railway.app/usuarios');
  }

  get(id: any) {
    return this.http.get('https://proyecto-bbdd-production-faf3.up.railway.app/usuario/'+id, httpOptions);
  }

  post(data: any){
    return this.http.post('https://proyecto-bbdd-production-faf3.up.railway.app/register',data);
  }

  put(id:any, data: any){
    return this.http.put('https://proyecto-bbdd-production-faf3.up.railway.app/usuario/'+id, data);
  }

  delete(id: any) {
    return this.http.delete('https://proyecto-bbdd-production-faf3.up.railway.app/usuario/'+id);
  }

  login(data: any){
    return this.http.post('https://proyecto-bbdd-production-faf3.up.railway.app/login',data,httpOptions);
  }

  getByApodo(apodo: any) {
    return this.http.get('https://proyecto-bbdd-production-faf3.up.railway.app/usuarios/nombre/'+apodo);
  }
}
