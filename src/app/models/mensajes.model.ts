export class Mensajes {
    fecha: string;
    mensaje: string;
    party: any;
    usuario: any;

    constructor (fecha: string, mensaje: string, party: any, usuario: any) {
        this.mensaje = mensaje;
        this.party = party;
        this.usuario = usuario;
        this.fecha = fecha;
    }
}
