"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RedVeterinarias = void 0;
var uuid_1 = require("uuid");
var RedVeterinarias = /** @class */ (function () {
    function RedVeterinarias(nombre) {
        this.id = Math.floor(Math.random() * 1000000000);
        this.Veterinarias = [];
        this.nombre = nombre;
    }
    RedVeterinarias.prototype.getNombre = function () {
        return this.nombre;
    };
    RedVeterinarias.prototype.getId = function () {
        return this.id;
    };
    RedVeterinarias.prototype.altaVeterinaria = function (veterinaria) {
        veterinaria.setId((0, uuid_1.v4)());
        this.Veterinarias.push(veterinaria);
    };
    RedVeterinarias.prototype.bajaVeterinaria = function (veterinaria) {
        var index = this.Veterinarias.indexOf(veterinaria);
        if (index !== -1) {
            this.Veterinarias.splice(index, 1);
            console.log("Se ha eliminado la veterinaria: " + veterinaria.getNombre());
        }
        else {
            console.log("No se ha encontrado la veterinaria: " + veterinaria.getNombre());
        }
    };
    RedVeterinarias.prototype.obtenerVeterinarias = function () {
        return this.Veterinarias;
    };
    RedVeterinarias.prototype.modificarVeterinaria = function (nombre, nuevonombre, nuevadireccion, nuevotelefono) {
        var veteEncontrada = this.Veterinarias.findIndex(function (veterinaria) { return veterinaria.getNombre() === nombre; });
        if (veteEncontrada !== -1) {
            this.Veterinarias[veteEncontrada].setNombre(nuevonombre);
            this.Veterinarias[veteEncontrada].setDireccion(nuevadireccion);
            this.Veterinarias[veteEncontrada].setTelefono(nuevotelefono);
            console.log("Se ha modificado la veterinaria: " + nombre);
        }
        else {
            console.log("No se ha encontrado la veterinaria: " + nombre);
        }
    };
    RedVeterinarias.prototype.imprimirVeterinarias = function () {
        var veterinarias = this.obtenerVeterinarias();
        if (veterinarias.length === 0) {
            console.log("No hay veterinarias en la lista.");
        }
        else {
            // Imprime cada cliente usando el método mostrarCliente()
            veterinarias.forEach(function (cliente) {
                console.log(cliente.mostrarVeterinaria());
            });
        }
    };
    return RedVeterinarias;
}());
exports.RedVeterinarias = RedVeterinarias;
