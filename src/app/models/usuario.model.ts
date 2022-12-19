export class Usuario {
    apellidos: string;
    apodo: string;
    contrasenia: string;
    email: string;
    nombre: string;
    img_avatar: string;
    rol: string;

    constructor (apellidos: string, apodo: string, contrasenia: string, email: string, nombre: string, img_avatar: string, rol: string) {
        this.apellidos = apellidos;
        this.apodo = apodo;
        this.contrasenia = contrasenia;
        this.email = email;
        this.nombre = nombre;
        this.img_avatar = img_avatar;
        this.rol= rol;
    }
}
