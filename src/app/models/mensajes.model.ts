export class Mensajes {
    id_mensaje?: any;
    fecha?: Date;
    mensaje?: string;
    id_party?: any;
    id_usuario?: any;

    constructor (id_mensaje: any, fecha: Date, mensaje: string, id_party: any, id_usuario: any) {
        this.id_mensaje = id_mensaje;
        this.fecha = fecha;
        this.mensaje = mensaje;
        this.id_party = id_party;
        this.id_usuario = id_usuario;
    }
}
