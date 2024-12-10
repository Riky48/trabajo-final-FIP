"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cliente = void 0;
var Persona_1 = require("./Persona");
var Cliente = /** @class */ (function (_super) {
    __extends(Cliente, _super);
    function Cliente(nombre, telefono, Mascota, id, esVip, visitas) {
        var _this = _super.call(this, nombre, telefono) || this;
        _this.mascotas = [];
        _this.mascotas = _this.mascotas;
        _this.visitas = _this.visitas;
        _this.esVip = false;
        return _this;
    }
    Cliente.prototype.getId = function () {
        return this.id;
    };
    Cliente.prototype.setId = function (id) {
        this.id = id;
    };
    Cliente.prototype.getMascotas = function () {
        return this.mascotas;
    };
    Cliente.prototype.setMascotas = function (mascotas) {
        this.mascotas = mascotas;
    };
    Cliente.prototype.getVisitas = function () {
        return this.visitas;
    };
    Cliente.prototype.setVisitas = function (visitas) {
        this.visitas = visitas;
    };
    Cliente.prototype.mostrarCliente = function () {
        return "ID: ".concat(this.id, ", Nombre: ").concat(this.nombre, ", Tel\u00E9fono: ").concat(this.telefono);
    };
    Cliente.prototype.incrementarVisitas = function () {
        this.visitas++;
    };
    Cliente.prototype.esonoVip = function () {
        if (this.visitas >= 5) {
            this.esVip = true;
            console.log("".concat(this.nombre, " es VIP"));
        }
        else {
            console.log("".concat(this.nombre, " no es VIP"));
        }
    };
    Cliente.prototype.agregarMascota = function (mascota) {
        this.mascotas.push(mascota);
        console.log("Mascota ".concat(mascota.nombre, " agregada a ").concat(this.nombre, ". "));
    };
    Cliente.prototype.obtenerMacota = function () {
        return this.mascotas;
    };
    Cliente.prototype.imprimirMascota = function () {
        if (this.mascotas.length == 0) {
            console.log("".concat(this.nombre, " no tiene mascota"));
        }
        else {
            console.log("Mascota de ".concat(this.nombre, ": "));
            this.mascotas.forEach(function (m) { return console.log("- ".concat(m.nombre, " (").concat(m.especie, ")")); });
        }
    };
    Cliente.prototype.modificarMascota = function (nombre, nuevoNombre, nuevaEspecie) {
        var mascota = this.mascotas.find(function (m) { return m.nombre === nombre; });
        if (mascota) {
            mascota.nombre = nuevoNombre;
            mascota.especie = nuevaEspecie;
            console.log("Mascota ".concat(mascota.nombre, " modificada con exito."));
            return true;
        }
        else {
            console.log("Mascota ".concat(nombre, " modificada con exito."));
            return false;
        }
    };
    Cliente.prototype.eliminarMascota = function (nombre) {
        var index = this.mascotas.findIndex(function (m) { return m.nombre === nombre; });
        if (index !== -1) {
            this.mascotas.splice(index, 1);
            console.log("Mascota ".concat(nombre, " eliminada con \u00E9xito."));
            return true;
        }
        else {
            console.log("Mascota ".concat(nombre, " no encontrada."));
            return false;
        }
    };
    return Cliente;
}(Persona_1.Persona));
exports.Cliente = Cliente;
