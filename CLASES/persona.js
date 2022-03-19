"use strict";
exports.__esModule = true;
exports.Persona = void 0;
var Persona = /** @class */ (function () {
    function Persona() {
        this.direcciones = [];
        this.mails = [];
        this.telefonos = [];
        this.notas = [];
    }
    Persona.prototype.getNombre = function () {
        return this.nombre;
    };
    Persona.prototype.setNombre = function (nombre) {
        this.nombre = nombre;
    };
    Persona.prototype.getApellidos = function () {
        return this.apellidos;
    };
    Persona.prototype.setApellidos = function (apellidos) {
        this.apellidos = apellidos;
    };
    Persona.prototype.getEdad = function () {
        return this.edad;
    };
    Persona.prototype.setEdad = function (edad) {
        this.edad = edad;
    };
    Persona.prototype.getDni = function () {
        return this.dni;
    };
    Persona.prototype.setDni = function (dni) {
        this.dni = dni;
    };
    Persona.prototype.getCumpleañOs = function () {
        return this.cumpleaños;
    };
    Persona.prototype.setCumpleañOs = function (cumpleaños) {
        this.cumpleaños = cumpleaños;
    };
    Persona.prototype.getColorFavorito = function () {
        return this.colorFavorito;
    };
    Persona.prototype.setColorFavorito = function (colorFavorito) {
        this.colorFavorito = colorFavorito;
    };
    Persona.prototype.getSexo = function () {
        return this.sexo;
    };
    Persona.prototype.setSexo = function (sexo) {
        this.sexo = sexo;
    };
    Persona.prototype.getDirecciones = function () {
        return this.direcciones;
    };
    Persona.prototype.setDirecciones = function (direcciones) {
        this.direcciones = direcciones;
    };
    Persona.prototype.getMails = function () {
        return this.mails;
    };
    Persona.prototype.setMails = function (mails) {
        this.mails = mails;
    };
    Persona.prototype.getTelefonos = function () {
        return this.telefonos;
    };
    Persona.prototype.setTelefonos = function (telefonos) {
        this.telefonos = telefonos;
    };
    Persona.prototype.getNotas = function () {
        return this.notas;
    };
    Persona.prototype.setNotas = function (notas) {
        this.notas = notas;
    };
    Persona.prototype.toString = function () {
        var stringvalue = "Persona:\nNombre: " + this.nombre + "\nApellidos: " + this.apellidos
            + "\nEdad: " + this.edad + "\nDNI: " + this.dni.toString() + "\nCumpleaños: " + this.cumpleaños.toLocaleDateString()
            + "\nColor Favorito: " + this.colorFavorito + "\nSexo: " + this.sexo.toString() + "\nDirecciones: ";
        this.direcciones.forEach(function (direccion) { stringvalue += direccion.toString(); });
        stringvalue += "\nMail: ";
        this.mails.forEach(function (mail) { stringvalue += mail.toString(); });
        stringvalue += "\nTélefonos: ";
        this.telefonos.forEach(function (telefono) { stringvalue += telefono.toString(); });
        stringvalue += "\nNotas: ";
        this.notas.forEach(function (nota) { stringvalue += "\nnota: " + nota; });
        return stringvalue;
    };
    return Persona;
}());
exports.Persona = Persona;
