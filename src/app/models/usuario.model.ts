export class Usuario {
    id_usuario?: any;
    apellidos?: string;
    apodo?: string;
    contrasenia?: string;
    email?: string;
    nombre?: string;

    constructor (id_usuario: any, apellidos: string, apodo: string, contrasenia: string, email: string, nombre: string) {
        this.id_usuario = id_usuario;
        this.apellidos = apellidos;
        this.apodo = apodo;
        this.contrasenia = contrasenia;
        this.email = email;
        this.nombre = nombre;
    }
}
