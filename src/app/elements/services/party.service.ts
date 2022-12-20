import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Party } from 'src/app/models/party.model';

@Injectable({
  providedIn: 'root'
})
export class PartyService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Party[]> {
    return this.http.get<Party[]>('https://proyecto-bbdd-production-faf3.up.railway.app/api/party');
  }

  get(id: any) {
    return this.http.get('https://proyecto-bbdd-production-faf3.up.railway.app/api/party/'+id);
  }

  create(data: any) {
    return this.http.post('https://proyecto-bbdd-production-faf3.up.railway.app/api/party', data);
  }

  findByNombre(nombre: any) {
    return this.http.get<Party[]>('https://proyecto-bbdd-production-faf3.up.railway.app/api/party/nombre/'+nombre);
  }

  put(id:any, data: any){
    return this.http.put('https://proyecto-bbdd-production-faf3.up.railway.app/api/party/'+id, data);
  }

  delete(id: any) {
    return this.http.delete('https://proyecto-bbdd-production-faf3.up.railway.app/api/party/'+id);
  }

  getMyParties(id: any) {
    return this.http.get('https://proyecto-bbdd-production-faf3.up.railway.app/api/party/usuarios'+id);
  }
}
