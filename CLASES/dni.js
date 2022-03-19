"use strict";
exports.__esModule = true;
exports.Dni = void 0;
var Dni = /** @class */ (function () {
    function Dni(numero, letra) {
        this.numero = numero;
        this.letra = letra;
    }
    Dni.prototype.getNumero = function () {
        return this.numero;
    };
    Dni.prototype.setNumero = function (numero) {
        this.numero = numero;
    };
    Dni.prototype.getLetra = function () {
        return this.letra;
    };
    Dni.prototype.setLetra = function (letra) {
        this.letra = letra;
    };
    Dni.prototype.equals = function (other) {
        return this.numero == other.numero && this.letra == other.letra;
    };
    Dni.prototype.toString = function () {
        return "Numero: " + this.numero + "\nLetra: " + this.letra;
    };
    return Dni;
}());
exports.Dni = Dni;
