import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Roles } from 'src/app/models/roles.model';

@Injectable({
  providedIn: 'root'
})
export class RolesService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Roles[]> {
    return this.http.get<Roles[]>('https://proyecto-bbdd-production-36ba.up.railway.app/api/roles');
  }

  get(id: any) {
    return this.http.get('https://proyecto-bbdd-production-36ba.up.railway.app/api/roles/'+id);
  }
}
