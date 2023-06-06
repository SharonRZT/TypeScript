export class Direccion {
    private _calle: string;
    private _numero: number;
    private _piso: number;
    private _letra: string;
    private _codigoPostal: number;
    private _poblacion: string;
    private _provincia: string;

    constructor(
        calle: string,
        numero: number,
        piso: number,
        letra: string,
        codigoPostal: number,
        poblacion: string,
        provincia: string,
    ) {
        this._calle = calle;
        this._numero = numero;
        this._piso = piso;        
        this._letra = letra;
        this._codigoPostal = codigoPostal;
        this._poblacion = poblacion;
        this._provincia = provincia;
    }

    // Getters
  public getCalle(): string {
    return this._calle;
  }

  public getNumero(): number {
      return this._numero;
  }

  public getPiso(): number {
      return this._piso;
  }

  public getLetra(): string {
      return this._letra;
  }

  public getCodigoPostal(): number {
      return this._codigoPostal;
  }

  public getPoblacion(): string {
      return this._poblacion;
  }

  public getProvincia(): string {
      return this._provincia;
  }

  // Setters
  public setCalle(calle: string): void {
      this._calle = calle;
  }

  public setNumero(numero: number): void {
      this._numero = numero;
  }

  public setPiso(piso: number): void {
      this._piso = piso;
  }

  public setLetra(letra: string) {
      this._letra = letra;
  }

  public setCodigoPostal(codigoPostal: number) {
      this._codigoPostal = codigoPostal;
  }

  public setPoblacion(poblacion: string) {
      this._poblacion = poblacion;
  }

  public setProvincia(provincia: string) {
      this._provincia = provincia;
  }

 public mostrarDatos(): string {
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