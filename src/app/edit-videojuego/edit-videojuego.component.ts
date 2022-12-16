import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import { VideojuegoService } from '../elements/services/videojuego.service';
import { Videojuego } from '../models/videojuego.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-videojuego',
  templateUrl: './edit-videojuego.component.html',
  styleUrls: ['./edit-videojuego.component.css']
})
export class EditVideojuegoComponent {
  titulo: string = '';

  videojuego: any;

  constructor(private videojuegoService: VideojuegoService, private route: ActivatedRoute) {}

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    this.videojuegoService.get(id).subscribe(result => this.videojuego = result);
  }

  modificarVideojuego(): void {

    if((!this.titulo)){this.titulo=this.videojuego.titulo}

    if(this.titulo !=""){
      const videojuego_aux : Videojuego = {
        titulo: this.titulo,
      };

      console.log(videojuego_aux);

      this.videojuegoService.put(this.videojuego.id_videojuego, videojuego_aux).subscribe(response => {
        console.log(response);
      });
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Videojuego modificado con éxito',
        confirmButtonText:'<a href="/crud-admin" style="text-decoration: none;color:white;">VOLVER</a>',
      })
    }else{
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'Error al modificar el videojuego',
        showConfirmButton: false,
        timer: 2000
      })
    }
  }
}
