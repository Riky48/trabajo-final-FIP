"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Veterinaria = void 0;
var uuid_1 = require("uuid");
var Veterinaria = /** @class */ (function () {
    function Veterinaria(nombre, direccion, telefono) {
        this.listaClientes = [];
        this.listaProveedores = [];
        this.nombre = nombre;
        this.direccion = direccion;
        this.telefono = telefono;
    }
    Veterinaria.prototype.getNombre = function () {
        return this.nombre;
    };
    Veterinaria.prototype.setNombre = function (nombre) {
        this.nombre = nombre;
    };
    Veterinaria.prototype.getDireccion = function () {
        return this.direccion;
    };
    Veterinaria.prototype.setDireccion = function (direccion) {
        this.direccion = direccion;
    };
    Veterinaria.prototype.getTelefono = function () {
        return this.telefono;
    };
    Veterinaria.prototype.setTelefono = function (telefono) {
        this.telefono = telefono;
    };
    Veterinaria.prototype.getId = function () {
        return this.id;
    };
    Veterinaria.prototype.setId = function (id) {
        this.id = id;
    };
    Veterinaria.prototype.mostrarVeterinaria = function () {
        return "ID: ".concat(this.id, ", Nombre: ").concat(this.nombre, ", Tel\u00E9fono: ").concat(this.telefono);
    };
    Veterinaria.prototype.altaCliente = function (cliente) {
        cliente.setId((0, uuid_1.v4)());
        this.listaClientes.push(cliente);
    };
    Veterinaria.prototype.bajaCliente = function (cliente) {
        var index = this.listaClientes.indexOf(cliente);
        if (index !== -1) {
            this.listaClientes.splice(index, 1);
            console.log("Se ha eliminado el cliente: " + cliente.getNombre());
        }
        else {
            console.log("No se ha encontrado el cliente: " + cliente.getNombre());
        }
    };
    Veterinaria.prototype.obtenerClientes = function () {
        return this.listaClientes;
    };
    Veterinaria.prototype.imprimirClientes = function () {
        var clientes = this.obtenerClientes();
        if (clientes.length === 0) {
            console.log("No hay clientes en la lista.");
        }
        else {
            // Imprime cada cliente usando el método mostrarCliente()
            clientes.forEach(function (cliente) {
                console.log(cliente.mostrarCliente());
                cliente.imprimirMascota();
            });
        }
    };
    Veterinaria.prototype.modificarCliente = function (nombre) {
        var cliente = this.listaClientes.find(function (c) { return c.nombre === nombre; });
        if (!cliente) {
            console.log("Cliente ".concat(nombre, " no encontrado."));
            return null;
        }
        return cliente;
    };
    Veterinaria.prototype.altaProveedor = function (proveedor) {
        proveedor.setId((0, uuid_1.v4)());
        this.listaProveedores.push(proveedor);
        console.log("Proveedor ".concat(proveedor.nombre, " agregado con \u00E9xito"));
    };
    Veterinaria.prototype.bajaProveedor = function (nombre) {
        var index = this.listaProveedores.findIndex(function (p) { return p.nombre === nombre; });
        if (index !== -1) {
            this.listaProveedores.splice(index, 1);
            console.log("Proveedor ".concat(nombre, " eliminado con \u00E9xito!"));
        }
        else {
            console.log("Proveedor ".concat(nombre, " no encontrado."));
        }
    };
    Veterinaria.prototype.obtenerProveedores = function () {
        return this.listaProveedores;
    };
    Veterinaria.prototype.imprimirProveedores = function () {
        if (this.listaProveedores.length === 0) {
            console.log("No hay proveedores registrados.");
        }
        else {
            console.log("Lista de proveedores: ");
            this.listaProveedores.forEach(function (p) { return console.log("".concat(p.nombre, " | Telefono: ").concat(p.telefono, " | Producto: ").concat(p.producto)); });
        }
    };
    Veterinaria.prototype.modificarProveedor = function (nombre, nuevoNombre, nuevoTelefono, nuevoProducto) {
        var proveedor = this.listaProveedores.find(function (p) { return p.nombre === nombre; });
        if (proveedor) {
            proveedor.nombre = nuevoNombre || proveedor.nombre;
            proveedor.telefono = nuevoTelefono || proveedor.telefono;
            proveedor.producto = nuevoProducto || proveedor.producto;
            console.log("Proveedor ".concat(nombre, " modificado con \u00E9xito!"));
            return true;
        }
        else {
            console.log("Proveedor ".concat(nombre, " no encontrado."));
            return false;
        }
    };
    return Veterinaria;
}());
exports.Veterinaria = Veterinaria;
