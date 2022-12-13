export class Party {
    id_party: any;
    nombre: string;
    id_videojuego: any;

    constructor (id_party: any, nombre: string, id_videojuego: any) {
        this.id_party = id_party;
        this.nombre = nombre;
        this.id_videojuego = id_videojuego;
    }
}
