"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Persona = void 0;
class Persona {
    constructor(nombre, apellidos, edad, dni, cumpleanos, colorFavorito, sexo, direcciones, mails, telefonos, notas) {
        this._nombre = nombre;
        this._apellidos = apellidos;
        this._edad = edad;
        this._dni = dni;
        this._cumpleanos = cumpleanos;
        this._colorFavorito = colorFavorito;
        this._sexo = sexo;
        this._direcciones = direcciones,
            this._mails = mails;
        this._telefonos = telefonos;
        this._notas = notas;
    }
    // Getters (mostrar)
    getNombre() {
        return this._nombre;
    }
    getApellidos() {
        return this._apellidos;
    }
    getEdad() {
        return this._edad;
    }
    getDni() {
        return this._dni;
    }
    getCumpleanos() {
        return this._cumpleanos;
    }
    getColorFavorito() {
        return this._colorFavorito;
    }
    getSexo() {
        return this._sexo;
    }
    getDirecciones() {
        return this._direcciones;
    }
    getMails() {
        return this._mails;
    }
    getTelefonos() {
        return this._telefonos;
    }
    getNotas() {
        return this._notas;
    }
    // Setters (modificar)
    setNombre(nombre) {
        this._nombre = nombre;
    }
    setApellidos(apellidos) {
        this._apellidos = apellidos;
    }
    setEdad(edad) {
        this._edad = edad;
    }
    setDni(dni) {
        this._dni = dni;
    }
    setCumpleanos(cumpleanos) {
        this._cumpleanos = cumpleanos;
    }
    setColorFavorito(colorFavorito) {
        this._colorFavorito = colorFavorito;
    }
    setSexo(sexo) {
        this._sexo = sexo;
    }
    setDirecciones(direcciones) {
        this._direcciones = direcciones;
    }
    setMails(mails) {
        this._mails = mails;
    }
    setTelefonos(telefonos) {
        this._telefonos = telefonos;
    }
    setNotas(notas) {
        this._notas = notas;
    }
    // Metodos para cambiar atributos
    cambiarDireccion(direccion) {
        this._direcciones.push(direccion);
    }
    cambiarTelefono(telefono) {
        this._telefonos.push(telefono);
    }
    cambiarMail(mail) {
        this._mails.push(mail);
    }
    modificarRegistro(nuevaDireccion, nuevoTelefono, nuevoCorreo) {
        this._direcciones = nuevaDireccion;
        this._telefonos = nuevoTelefono;
        this._mails = nuevoCorreo;
    }
    mostrarContactos() {
        let datosPersona = `
        Nombre : ${this.getNombre()}
        Apellidos : ${this.getApellidos()}
        Edad : ${this.getEdad()}
        Dni : ${this.getDni()}
        Sexo : ${this.getSexo()}
        Cumpleaños : ${this.getCumpleanos().getDate()}/${this.getCumpleanos().getMonth()}/${this.getCumpleanos().getFullYear()}
        Color favorito : ${this.getColorFavorito()}
        Direccion : ${this.getDirecciones().map((direccion) => direccion.mostrarDatos()).join('\n')}
        Mails : ${this.getMails().map((mail) => mail.mostrarDatos()).join('\n')}
        Telefonos : ${this.getTelefonos().map((telefono) => telefono.mostrarDatos()).join('\n')}
        Notas : ${this.getNotas()}
      `;
        return datosPersona;
    }
}
exports.Persona = Persona;
