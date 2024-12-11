"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Mascota_1 = require("./Mascota");
var Veterinaria_1 = require("./Veterinaria");
var Cliente_1 = require("./Cliente");
var Proveedor_1 = require("./Proveedor");
var readlineSync = require("readline-sync");
function main() {
    var veterinaria = new Veterinaria_1.Veterinaria("Huellas", "calle 293", 228457181);
    var continuar = true;
    var _loop_1 = function () {
        console.log("\n        Bienvenido a Veterinaria: \"".concat(veterinaria.nombre, "\" Direcci\u00F3n: \"").concat(veterinaria.getDireccion(), "\" Telefono: \"").concat(veterinaria.getTelefono(), "\"\n    ===== Men\u00FA Veterinaria =====\n    1. Alta de Cliente.\n    2. Baja de Cliente.\n    3. Modificar cliente.\n    4. Imprimir Clientes.\n    5. Gestionar mascotas.\n    6. Alta de proveedor.\n    7. Modificar proveedor.\n    8. Baja de proveedor.\n    9. Imprimir proveedor\n    10. Salir.\n    "));
        var opcion = readlineSync.question("Seleccione una opción: ");
        switch (opcion.trim()) {
            case "1": {
                // Alta de Cliente
                var nombre = readlineSync.question("Ingrese el nombre del cliente: ");
                var telefono = readlineSync.question("Ingrese el teléfono del cliente: ");
                var esVip = Math.random();
                var nuevoCliente = new Cliente_1.Cliente(nombre, telefono);
                veterinaria.altaCliente(nuevoCliente);
                var agregarOtraMascota = true;
                while (agregarOtraMascota) {
                    var deseaAgregarMascota = readlineSync.keyInYNStrict("Desea agregar una mascota?.");
                    if (deseaAgregarMascota) {
                        var nombreMascota = readlineSync.question("Nombre de la mascota: ");
                        var especie = readlineSync.question("Especie de la mascota: ");
                        var nuevaMascota = new Mascota_1.Mascota(nombreMascota, especie);
                        nuevoCliente.agregarMascota(nuevaMascota);
                        console.log("Mascota ".concat(nombreMascota, " (").concat(especie, ") agregada con \u00E9xito!"));
                    }
                    else {
                        agregarOtraMascota = false;
                    }
                }
                break;
            }
            case "2": {
                // Baja de Cliente
                veterinaria.imprimirClientes();
                var nombre_1 = readlineSync.question("Ingrese el nombre del cliente a eliminar: ");
                var clienteAEliminar = veterinaria.obtenerClientes().find(function (c) { return c.nombre === nombre_1; });
                if (clienteAEliminar) {
                    veterinaria.bajaCliente(clienteAEliminar);
                }
                else {
                    console.log("Cliente no encontrado.");
                }
                break;
            }
            case "3": {
                var nombre = readlineSync.question("Ingrese el nombre del cliente que quiere modificar: ");
                var cliente = veterinaria.modificarCliente(nombre);
                if (cliente) {
                    console.log("\n                    \u00BFQue desea modificar?\n                    1. Nombre.\n                    2. Telefono.");
                    var opcionModificar = readlineSync.question("Seleccione una opción: ");
                    switch (opcionModificar.trim()) {
                        case "1": {
                            var nuevoNombre = readlineSync.question("Ingrese el nuevo nombre: ");
                            cliente.nombre = nuevoNombre;
                            console.log("Nombre modificado con éxito.");
                            break;
                        }
                        case "2": {
                            var nuevoTelefono = readlineSync.question("Ingrese el nuevo telefono: ");
                            cliente.telefono = nuevoTelefono;
                            console.log("Telefono modificado con éxito.");
                            break;
                        }
                        default: {
                            console.log("Opcion no válida. Volviendo al menú principal.");
                        }
                    }
                }
            }
            case "4": {
                // Imprimir Clientes
                veterinaria.imprimirClientes();
                break;
            }
            case "5": {
                var nombreCliente = readlineSync.question("Ingrese el nombre del cliente: ");
                var cliente = veterinaria.modificarCliente(nombreCliente);
                if (cliente) {
                    console.log("\n                \u00BFQue desea hacer con la mascota?\n                1. Modificar una mascota\n                2. Eliminar una mascota");
                    var opcionMascotas = readlineSync.question("Seleccione una opción: ");
                    switch (opcionMascotas.trim()) {
                        case "1": {
                            var nombreMascota = readlineSync.question("Ingrese el nombre de la mascota a modificar: ");
                            var nuevoNombre = readlineSync.question("Ingrese el nuevo nombre de la mascota: ");
                            var nuevaEspecie = readlineSync.question("Ingrese la nueva especie de la mascota: ");
                            cliente.modificarMascota(nombreMascota, nuevoNombre, nuevaEspecie);
                            break;
                        }
                        case "2": {
                            var nombreMascota = readlineSync.question("Ingrese el nombre de la mascota que desea eliminar: ");
                            cliente.eliminarMascota(nombreMascota);
                            break;
                        }
                        default: {
                            console.log("Opcion no valida. Volviendo al menu principal.");
                        }
                    }
                }
                break;
            }
            case "6": {
                var nombre = readlineSync.question("Ingrese el nombre del proveedor: ");
                var telefono = readlineSync.question("Ingrese el telefono del proveedor: ");
                var producto = readlineSync.question("Ingrese el producto que provee: ");
                var nuevoProveedor = new Proveedor_1.Proveedor(nombre, telefono, producto);
                veterinaria.altaProveedor(nuevoProveedor);
                break;
            }
            case "7": {
                var nombre = readlineSync.question("Ingrese el nombre del proveedor que quieras modificar: ");
                var proveedorExistente = veterinaria.modificarProveedor(nombre);
                if (proveedorExistente) {
                    var nuevoNombre = readlineSync.question("Ingrese el nuevo nombre: ");
                    var nuevoTelefono = readlineSync.question("Ingrese el nuevo telefono: ");
                    var nuevoProducto = readlineSync.question("Ingrese el nuevo producto: ");
                    veterinaria.modificarProveedor(nombre, nuevoNombre, nuevoTelefono, nuevoProducto);
                }
                break;
            }
            case "8": {
                var nombre = readlineSync.question("Ingrese el nombre del proveedor que quiere eliminar: ");
                veterinaria.bajaProveedor(nombre);
                break;
            }
            case "9": {
                veterinaria.imprimirProveedores();
                break;
            }
            case "10": {
                // Salir
                continuar = false;
                console.log("¡Gracias por usar el sistema de veterinaria!");
                break;
            }
            default: {
                console.log("Opción no válida. Intente nuevamente.");
            }
        }
    };
    while (continuar) {
        _loop_1();
    }
}
// Ejecutar la aplicación
main();
