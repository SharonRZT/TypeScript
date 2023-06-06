import { Telefono } from './Telefono';
import { Mail } from './Mail';
import { Direccion } from './Direccion';

export class Persona {
   private _nombre: string;
   private _apellidos: string;
   private _edad: number;
   private _dni: string;
   private _cumpleanos: Date;
   private _colorFavorito: string;
   private _sexo: string;
   private _direcciones: Direccion[];
   private _mails: Mail[];
   private _telefonos: Telefono[];
   private _notas: string;

    constructor(
        nombre:string,
        apellidos: string,
        edad: number,
        dni: string,
        cumpleanos: Date,
        colorFavorito: string,
        sexo: string,
        direcciones: Direccion[],
        mails: Mail[],
        telefonos: Telefono[],
        notas: string,
    ) {
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

    public getNombre(): string {
    return this._nombre;
    }

    public getApellidos(): string {
      return this._apellidos;
    }

    public getEdad(): number {
      return this._edad;
     }

    public getDni(): string {
      return this._dni;
    }

    public getCumpleanos(): Date {
      return this._cumpleanos;
    }

    public getColorFavorito(): string {
      return this._colorFavorito;
    }

    public getSexo(): string {
      return this._sexo;
    }

    public getDirecciones(): Direccion[] {
      return this._direcciones;
    }

    public getMails(): Mail[] {
      return this._mails;
    }

    public getTelefonos(): Telefono[] {
      return this._telefonos;
    }

    public getNotas(): string {
      return this._notas;
    }

    // Setters (modificar)
    public setNombre(nombre: string) {
    this._nombre = nombre;
    }

    public setApellidos(apellidos: string) {
    this._apellidos = apellidos;
    }

    public setEdad(edad: number) {
    this._edad = edad;
    }

    public setDni(dni: string) {
    this._dni = dni;
    }

    public setCumpleanos(cumpleanos: Date) {
    this._cumpleanos = cumpleanos;
    }

    public setColorFavorito(colorFavorito: string) {
    this._colorFavorito = colorFavorito;
    }

    public setSexo(sexo: string) {
    this._sexo = sexo;
    }

    public setDirecciones(direcciones: Direccion[]) {
    this._direcciones = direcciones;
    }

    public setMails(mails: Mail[]) {
    this._mails = mails;
    }

    public setTelefonos(telefonos: Telefono[]) {
    this._telefonos = telefonos;
    }

    public setNotas(notas: string) {
    this._notas = notas;
    }

    // Metodos para cambiar atributos

    public cambiarDireccion(direccion : Direccion) : void {
        this._direcciones.push(direccion);
    }
    public cambiarTelefono(telefono : Telefono) : void {
        this._telefonos.push(telefono);
    }
    cambiarMail(mail : Mail) : void {
        this._mails.push(mail);
    }

    public modificarRegistro(
      nuevaDireccion: Direccion[], 
      nuevoTelefono: Telefono[], 
      nuevoCorreo: Mail[]
      ): void {
      this._direcciones = nuevaDireccion;
      this._telefonos = nuevoTelefono;
      this._mails = nuevoCorreo;
    }

    public mostrarContactos(): string {
      let datosPersona = `
        Nombre : ${this.getNombre()}
        Apellidos : ${this.getApellidos()}
        Edad : ${this.getEdad()}
        Dni : ${this.getDni()}
        Sexo : ${this.getSexo()}
        Cumpleaños : ${this.getCumpleanos().getDate()}/${this.getCumpleanos().getMonth()}/${this.getCumpleanos().getFullYear()}
        Color favorito : ${this.getColorFavorito()}
        Direccion : ${this.getDirecciones().map((direccion)=>direccion.mostrarDatos()).join('\n')}
        Mails : ${this.getMails().map(( mail)=> mail.mostrarDatos()).join('\n')}
        Telefonos : ${this.getTelefonos().map((telefono)=>telefono.mostrarDatos()).join('\n')}
        Notas : ${this.getNotas()}
      `;
      return datosPersona;
    }
  }

  