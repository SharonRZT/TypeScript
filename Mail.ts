export class Mail {
  private _tipo: string;
  private _direccion: string;

  constructor(
    tipo: string,
    direccion: string
  ) {
    this._tipo = tipo;
    this._direccion = direccion;
  }

  // Getters
  public getTipo(): string {
    return this._tipo;
  }

  public getDireccion(): string {
      return this._direccion;
  }

  // Setters
  public setTipo(tipo: string): void {
      this._tipo = tipo;
  }

  public setDireccion(direccion: string): void {
      this._direccion = direccion;
  }

  public mostrarDatos(): string {
    return `Tipo: ${this.getTipo()} 
            Dirección: ${this.getDireccion()}
            `;
  }
}