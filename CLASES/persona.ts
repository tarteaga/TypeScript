import {Dni} from "./dni"
import {Sexo} from "./sexo"
import {Direccion} from "./direccion"
import {Mail} from "./mail"
import {Telefono} from "./telefono"

export class Persona {
    private nombre : string;
    private apellidos: string;
    private edad: number;
    private dni: Dni;
    private cumpleaños: Date;
    private colorFavorito : string;
    private sexo: Sexo;
    private direcciones: Array<Direccion> = [];
    private mails: Array<Mail> = [];
    private telefonos: Array<Telefono> =[];
    private notas: Array<string>=[];

    public getNombre(): string {
        return this.nombre;
    }

    public setNombre(nombre: string): void {
        this.nombre = nombre;
    }

    public getApellidos(): string {
        return this.apellidos;
    }

    public setApellidos(apellidos: string): void {
        this.apellidos = apellidos;
    }

    public getEdad(): number {
        return this.edad;
    }

    public setEdad(edad: number): void {
        this.edad = edad;
    }

    public getDni(): Dni {
        return this.dni;
    }

    public setDni(dni: Dni): void {
        this.dni = dni;
    }

    public getCumpleañOs(): Date {
        return this.cumpleaños;
    }

    public setCumpleañOs(cumpleaños: Date): void {
        this.cumpleaños = cumpleaños;
    }

    public getColorFavorito(): string {
        return this.colorFavorito;
    }

    public setColorFavorito(colorFavorito: string): void {
        this.colorFavorito = colorFavorito;
    }

    public getSexo(): Sexo {
        return this.sexo;
    }

    public setSexo(sexo: Sexo): void {
        this.sexo = sexo;
    }

    public getDirecciones(): Array<Direccion> {
        return this.direcciones;
    }

    public setDirecciones(direcciones: Array<Direccion>): void {
        this.direcciones = direcciones;
    }

    public getMails(): Array<Mail> {
        return this.mails;
    }

    public setMails(mails: Array<Mail>): void {
        this.mails = mails;
    }

    public getTelefonos(): Array<Telefono> {
        return this.telefonos;
    }

    public setTelefonos(telefonos: Array<Telefono>): void {
        this.telefonos = telefonos;
    }

    public getNotas(): Array<string> {
        return this.notas;
    }

    public setNotas(notas: Array<string>): void {
        this.notas = notas;
    }

    public toString(): string{
        let stringvalue = "Persona:\nNombre: " + this.nombre + "\nApellidos: " + this.apellidos
        +"\nEdad: " + this.edad + "\nDNI: " + this.dni.toString() + "\nCumpleaños: " + this.cumpleaños.toLocaleDateString()
        + "\nColor Favorito: " + this.colorFavorito + "\nSexo: " + this.sexo.toString() + "\nDirecciones: ";
        this.direcciones.forEach(function(direccion){stringvalue+= direccion.toString();});
        stringvalue+= "\nMail: ";
        this.mails.forEach(function(mail){stringvalue+=mail.toString();});
        stringvalue+= "\nTélefonos: ";
        this.telefonos.forEach(function(telefono){stringvalue+=telefono.toString();});
        stringvalue+= "\nNotas: ";
        this.notas.forEach(function(nota){stringvalue+="\nnota: " + nota;});
         return stringvalue;
     }
    
}