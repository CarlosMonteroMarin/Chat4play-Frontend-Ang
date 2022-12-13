import { Component } from '@angular/core';
import { VideojuegoService } from '../elements/services/videojuego.service';
import { Videojuego } from '../models/videojuego.model';

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
        alert("Videojuego añadido correctamente.")
    }else{
      alert("Complete todos los campos.");
    }
  }
}
