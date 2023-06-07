"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Telefono = void 0;
class Telefono {
    constructor(tipo, numero) {
        this._tipo = tipo;
        this._numero = numero;
    }
    // Getters
    getTipo() {
        return this._tipo;
    }
    getNumero() {
        return this._numero;
    }
    // Setters
    setTipo(tipo) {
        this._tipo = tipo;
    }
    setNumero(numero) {
        this._numero = numero;
    }
    mostrarDatos() {
        return `Tipo: ${this.getTipo()}
                Número: ${this.getNumero()}
                `;
    }
}
exports.Telefono = Telefono;
