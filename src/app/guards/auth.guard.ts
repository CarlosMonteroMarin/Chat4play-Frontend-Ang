import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UsuarioService } from '../elements/services/usuario.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private usuarioService: UsuarioService,
    private router: Router
  ){}

    canActivate():boolean{
        if(!this.usuarioService.isAuth()){
          alert("Debe logearse para poder acceder")
          this.router.navigate(['/login'])
          return false;
        }
      return true;
    }

  delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
  }
  }
