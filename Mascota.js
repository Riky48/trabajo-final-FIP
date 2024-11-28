"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mascota = void 0;
var Mascota = /** @class */ (function () {
    function Mascota(nombre, especie, id) {
        this.nombre = nombre;
        this.especie = especie;
        this.id = id;
        if (this.especie.toLowerCase() !== "perro" && this.especie.toLowerCase() !== "gato") {
            this.especie = "Exótico";
        }
    }
    Mascota.prototype.getNombre = function () {
        return this.nombre;
    };
    Mascota.prototype.setNombre = function (nombre) {
        this.nombre = nombre;
    };
    Mascota.prototype.getEspecie = function () {
        return this.especie;
    };
    Mascota.prototype.setEspecie = function (especie) {
        this.especie = especie;
    };
    Mascota.prototype.getId = function () {
        return this.id;
    };
    Mascota.prototype.setId = function (id) {
        this.id = id;
    };
    return Mascota;
}());
exports.Mascota = Mascota;
