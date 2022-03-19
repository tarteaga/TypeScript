 export class Direccion{
    private calle: string;
    private numero: number;
    private piso: number;
    private letra: string;
    private codigoPostal: number;
    private poblacion: string;
    private provincia: string;


  constructor(
    calle: string, 
    numero: number, 
    piso: number, 
    letra: string, 
    codigoPostal: number, 
    poblacion: string, 
    provincia: string
) {
    this.calle = calle
    this.numero = numero
    this.piso = piso
    this.letra = letra
    this.codigoPostal = codigoPostal
    this.poblacion = poblacion
    this.provincia = provincia
  }
   
    public getCalle(): string {
        return this.calle;
    }

    public setCalle(calle: string): void {
        this.calle = calle;
    }

    public getNumero(): number {
        return this.numero;
    }

    public setNumero(numero: number): void {
        this.numero = numero;
    }

    public getPiso(): number {
        return this.piso;
    }

    public setPiso(piso: number): void {
        this.piso = piso;
    }

    public getLetra(): string {
        return this.letra;
    }

    public setLetra(letra: string): void {
        this.letra = letra;
    }

    public getCodigoPostal(): number {
        return this.codigoPostal;
    }

    public setCodigoPostal(codigoPostal: number): void {
        this.codigoPostal = codigoPostal;
    }

    public getPoblacion(): string {
        return this.poblacion;
    }

    public setPoblacion(poblacion: string): void {
        this.poblacion = poblacion;
    }

    public getProvincia(): string {
        return this.provincia;
    }

    public setProvincia(provincia: string): void {
        this.provincia = provincia;
    }

    public toString(): string{
        return "\nCalle: " + this.calle + "\nNúmero: " + this.numero + "\nPiso: " + this.piso 
        + "\nLetra: " + this.letra + "\nCódigo Postal: " + this.codigoPostal 
        + "\nPoblación: " + this.poblacion + "\nProvincia: " + this.provincia;
    }
}