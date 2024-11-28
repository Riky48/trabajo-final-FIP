"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Persona = void 0;
var Persona = /** @class */ (function () {
    function Persona(nombre, telefono) {
        this.nombre = nombre;
        this.telefono = telefono;
    }
    Persona.prototype.getNombre = function () {
        return this.nombre;
    };
    Persona.prototype.setNombre = function (nombre) {
        this.nombre = nombre;
    };
    Persona.prototype.getTelefono = function () {
        return this.telefono;
    };
    Persona.prototype.setTelefono = function (telefono) {
        this.telefono = telefono;
    };
    return Persona;
}());
exports.Persona = Persona;
