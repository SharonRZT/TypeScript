export class Telefono {
    private _tipo: string;
    private _numero: number;

    constructor(
        tipo: string, numero: number
    ) {
        this._tipo = tipo;
        this._numero = numero;
    }

    // Getters
    public getTipo(): string {
    return this._tipo;
    }

    public getNumero(): number {
      return this._numero;
    }

    // Setters
    public setTipo(tipo: string): void {
      this._tipo = tipo;
    }

    public setNumero(numero: number):void {
      this._numero = numero;
    }

    public mostrarDatos(): string {
        return `Tipo: ${this.getTipo()}
                Número: ${this.getNumero()}
                `;
    }
}