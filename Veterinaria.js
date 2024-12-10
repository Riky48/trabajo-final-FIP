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
    Veterinaria.prototype.altaProveedor = function (listaProveedores) {
        listaProveedores.setId((0, uuid_1.v4)());
        this.listaProveedores.push(listaProveedores);
    };
    Veterinaria.prototype.bajaProveedor = function (proveedor) {
        var index = this.listaProveedores.indexOf(proveedor);
        if (index !== -1) {
            this.listaProveedores.splice(index, 1);
            console.log("Se ha eliminado el proveedor: " + proveedor.getNombre());
        }
        else {
            console.log("No se ha encontrado el proveedor: " + proveedor.getNombre());
        }
    };
    Veterinaria.prototype.obtenerProveedores = function () {
        return this.listaProveedores;
    };
    Veterinaria.prototype.imprimirProveedores = function () {
        var clientes = this.obtenerProveedores();
        if (clientes.length === 0) {
            console.log("No hay proveedores en la lista.");
        }
        else {
            // Imprime cada proveedor usando el método mostrarProveedor()
            clientes.forEach(function (cliente) {
                console.log(cliente.mostrarProveedor());
            });
        }
    };
    Veterinaria.prototype.modificarProveedor = function (nombre, nuevonombre, nuevotelefono) {
        var provEncontrado = this.listaProveedores.findIndex(function (proveedor) { return proveedor.getNombre() === nombre; });
        if (provEncontrado !== -1) {
            this.listaProveedores[provEncontrado].setNombre(nuevonombre);
            this.listaProveedores[provEncontrado].setTelefono(nuevotelefono);
            console.log("Se ha modificado el proveedor: " + nombre);
        }
        else {
            console.log("No se ha encontrado el proveedor: " + nombre);
        }
    };
    return Veterinaria;
}());
exports.Veterinaria = Veterinaria;
