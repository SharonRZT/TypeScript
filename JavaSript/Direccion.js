"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Direccion = void 0;
class Direccion {
    constructor(calle, numero, piso, letra, codigoPostal, poblacion, provincia) {
        this._calle = calle;
        this._numero = numero;
        this._piso = piso;
        this._letra = letra;
        this._codigoPostal = codigoPostal;
        this._poblacion = poblacion;
        this._provincia = provincia;
    }
    // Getters
    getCalle() {
        return this._calle;
    }
    getNumero() {
        return this._numero;
    }
    getPiso() {
        return this._piso;
    }
    getLetra() {
        return this._letra;
    }
    getCodigoPostal() {
        return this._codigoPostal;
    }
    getPoblacion() {
        return this._poblacion;
    }
    getProvincia() {
        return this._provincia;
    }
    // Setters
    setCalle(calle) {
        this._calle = calle;
    }
    setNumero(numero) {
        this._numero = numero;
    }
    setPiso(piso) {
        this._piso = piso;
    }
    setLetra(letra) {
        this._letra = letra;
    }
    setCodigoPostal(codigoPostal) {
        this._codigoPostal = codigoPostal;
    }
    setPoblacion(poblacion) {
        this._poblacion = poblacion;
    }
    setProvincia(provincia) {
        this._provincia = provincia;
    }
    mostrarDatos() {
        return `Calle: ${this.getCalle()} 
            Número: ${this.getNumero()} 
            Piso: ${this.getPiso()} 
            Letra: ${this.getLetra()} 
            Código Postal: ${this.getCodigoPostal()}
            Población: ${this.getPoblacion()} 
            Provincia: ${this.getProvincia()}
            `;
    }
}
exports.Direccion = Direccion;
