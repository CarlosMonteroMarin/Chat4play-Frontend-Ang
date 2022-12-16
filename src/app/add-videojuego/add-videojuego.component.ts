import { Component } from '@angular/core';
import { VideojuegoService } from '../elements/services/videojuego.service';
import { Videojuego } from '../models/videojuego.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-videojuego',
  templateUrl: './add-videojuego.component.html',
  styleUrls: ['./add-videojuego.component.css']
})
export class AddVideojuegoComponent {
  titulo: string = '';

  constructor(private videojuegoService: VideojuegoService) {}

  guardarVideojuego(): void {
    if(this.titulo !=""){
      const videojuego : Videojuego = {
        titulo: this.titulo,
      };

      this.videojuegoService.post(videojuego).subscribe(response => {
        console.log(response);
      });
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Videojuego añadido con éxito',
        confirmButtonText:'<a href="/crud-admin" style="text-decoration: none;color:white;">VOLVER</a>',
      })
    }else{
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'Error al añadir el videojuego',
        showConfirmButton: false,
        timer: 2000
      })
    }
  }
}
