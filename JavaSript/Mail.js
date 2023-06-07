"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mail = void 0;
class Mail {
    constructor(tipo, direccion) {
        this._tipo = tipo;
        this._direccion = direccion;
    }
    // Getters
    getTipo() {
        return this._tipo;
    }
    getDireccion() {
        return this._direccion;
    }
    // Setters
    setTipo(tipo) {
        this._tipo = tipo;
    }
    setDireccion(direccion) {
        this._direccion = direccion;
    }
    mostrarDatos() {
        return `Tipo: ${this.getTipo()} 
            Dirección: ${this.getDireccion()}
            `;
    }
}
exports.Mail = Mail;
