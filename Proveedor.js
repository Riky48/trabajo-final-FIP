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
exports.Proveedor = void 0;
var Persona_1 = require("./Persona");
var Proveedor = /** @class */ (function (_super) {
    __extends(Proveedor, _super);
    function Proveedor(nombre, telefono, producto) {
        var _this = _super.call(this, nombre, telefono) || this;
        _this.producto = producto;
        return _this;
    }
    Proveedor.prototype.getId = function () {
        return this.id;
    };
    Proveedor.prototype.setId = function (id) {
        this.id = id;
    };
    Proveedor.prototype.mostrarProveedor = function () {
        return "ID: ".concat(this.id, ", Nombre: ").concat(this.nombre, ", Tel\u00E9fono: ").concat(this.telefono);
    };
    return Proveedor;
}(Persona_1.Persona));
exports.Proveedor = Proveedor;
