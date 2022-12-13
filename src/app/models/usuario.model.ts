export class Usuario {
    apellidos: string;
    apodo: string;
    contrasenia: string;
    email: string;
    nombre: string;

    constructor (apellidos: string, apodo: string, contrasenia: string, email: string, nombre: string) {
        this.apellidos = apellidos;
        this.apodo = apodo;
        this.contrasenia = contrasenia;
        this.email = email;
        this.nombre = nombre;
    }
}
