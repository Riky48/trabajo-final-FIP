"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RedVeterinarias = void 0;
var uuid_1 = require("uuid");
var RedVeterinarias = /** @class */ (function () {
    function RedVeterinarias() {
        this.id = Math.floor(Math.random() * 1000000000);
        this.veterinarias = [];
        this.veterinarias = [];
    }
    RedVeterinarias.prototype.getNombre = function () {
        return this.nombre;
    };
    RedVeterinarias.prototype.getId = function () {
        return this.id;
    };
    RedVeterinarias.prototype.altaVeterinaria = function (veterinaria) {
        veterinaria.setId((0, uuid_1.v4)());
        this.veterinarias.push(veterinaria);
    };
    RedVeterinarias.prototype.bajaVeterinaria = function (veterinaria) {
        var index = this.veterinarias.indexOf(veterinaria);
        if (index !== -1) {
            this.veterinarias.splice(index, 1);
            console.log("Se ha eliminado la veterinaria: " + veterinaria.getNombre());
        }
        else {
            console.log("No se ha encontrado la veterinaria: " + veterinaria.getNombre());
        }
    };
    RedVeterinarias.prototype.obtenerVeterinarias = function () {
        return this.veterinarias;
    };
    RedVeterinarias.prototype.modificarVeterinaria = function (nombre, nuevonombre, nuevadireccion, nuevotelefono) {
        var veteEncontrada = this.veterinarias.findIndex(function (veterinaria) { return veterinaria.getNombre() === nombre; });
        if (veteEncontrada !== -1) {
            this.veterinarias[veteEncontrada].setNombre(nuevonombre);
            this.veterinarias[veteEncontrada].setDireccion(nuevadireccion);
            this.veterinarias[veteEncontrada].setTelefono(nuevotelefono);
            console.log("Se ha modificado la veterinaria: " + nombre);
        }
        else {
            console.log("No se ha encontrado la veterinaria: " + nombre);
        }
    };
    RedVeterinarias.prototype.imprimirVeterinarias = function () {
        if (this.veterinarias.length === 0) {
            console.log("No hay sucursales regsitradas.");
        }
        else {
            console.log("Sucursales: ");
            this.veterinarias.forEach(function (sucursal, index) {
                console.log("".concat(index + 1, ". ").concat(sucursal.nombre));
            });
        }
    };
    return RedVeterinarias;
}());
exports.RedVeterinarias = RedVeterinarias;
