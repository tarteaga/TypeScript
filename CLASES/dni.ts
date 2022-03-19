export class Dni{
    private numero: number;
    private letra: string;

    public constructor(numero: number, letra:string){
        this.numero=numero;
        this.letra=letra;
    }

    public getNumero(): number {
        return this.numero;
    }

    public setNumero(numero: number): void {
        this.numero = numero;
    }

    public getLetra(): string {
        return this.letra;
    }

    public setLetra(letra: string): void {
        this.letra = letra;
    }

    public equals(other: Dni):boolean{
        return this.numero==other.numero && this.letra==other.letra;
    }

    public toString(): string{
        return "Numero: "  + this.numero + "\nLetra: " + this.letra;
    }
}