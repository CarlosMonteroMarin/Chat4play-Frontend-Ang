export class Mensajes {
    fecha: any;
    mensaje: string;
    party: any;
    usuario: any;

    constructor (fecha: any, mensaje: string, party: any, usuario: any) {
        this.mensaje = mensaje;
        this.party = party;
        this.usuario = usuario;
        this.fecha = fecha;
    }
}
