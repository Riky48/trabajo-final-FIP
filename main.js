"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
<<<<<<< HEAD
=======
var RedVeterinarias_1 = require("./RedVeterinarias");
>>>>>>> 8f24e6c3ccefd453de0d9f58a4e039229aff8156
var Mascota_1 = require("./Mascota");
var Veterinaria_1 = require("./Veterinaria");
var Cliente_1 = require("./Cliente");
var Proveedor_1 = require("./Proveedor");
<<<<<<< HEAD
var readlineSync = require("readline-sync");
var veterinaria1 = new Veterinaria_1.Veterinaria("algo", "algo", 23);
function main() {
    var veterinaria = new Veterinaria_1.Veterinaria("algo", "algo", 12);
    var continuar = true;
    var _loop_1 = function () {
        console.log("\n    ===== Men\u00FA Veterinaria =====\n    1. Alta de Cliente.\n    2. Baja de Cliente.\n    3. Modificar cliente.\n    4. Imprimir Clientes.\n    5. Gestionar mascotas.\n    6. Alta de proveedor.\n    7. Modificar proveedor.\n    8. Baja de proveedor.\n    9. Imprimir proveedor\n    10. Salir.\n    ");
        var opcion = readlineSync.question("Seleccione una opción: ");
        switch (opcion.trim()) {
            case "1": {
                // Alta de Cliente
                var nombre = readlineSync.question("Ingrese el nombre del cliente: ");
                var telefono = readlineSync.question("Ingrese el teléfono del cliente: ");
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
=======
var Utilidades_1 = require("./Utilidades");
var redVeterinarias = new RedVeterinarias_1.RedVeterinarias("Riky");
var veterinaria1 = new Veterinaria_1.Veterinaria("Alex", "Calle de la Veterinaria", 12345678);
var veterinaria2 = new Veterinaria_1.Veterinaria("richardinson", "piedras 555", 12345678666);
redVeterinarias.altaVeterinaria(veterinaria1);
redVeterinarias.altaVeterinaria(veterinaria2);
redVeterinarias.imprimirVeterinarias();
redVeterinarias.modificarVeterinaria("Alex", "Alexandria", "elvago 5656", 556678);
redVeterinarias.imprimirVeterinarias();
redVeterinarias.bajaVeterinaria(veterinaria1);
redVeterinarias.bajaVeterinaria(veterinaria2);
redVeterinarias.imprimirVeterinarias();
// Verifica los resultados
var Proveedor1 = new Proveedor_1.Proveedor("Comidapaperro", 14554);
var Proveedor2 = new Proveedor_1.Proveedor("Comidaspaexoticos", 1455554);
var cliente1 = new Cliente_1.Cliente("Juan", 12345678, 6);
var cliente2 = new Cliente_1.Cliente("Pedro", 98765432, 2);
var cliente3 = new Cliente_1.Cliente("Maria", 11111111, 0);
veterinaria1.altaCliente(cliente1);
veterinaria1.altaCliente(cliente2);
veterinaria1.altaCliente(cliente3);
var clientes = [cliente1, cliente2, cliente3];
(0, Utilidades_1.asegurarIdUnico)(clientes); // verifica que todos los clientes tengan un id unico
clientes.forEach(function (cliente) {
    console.log("ID: ".concat(cliente.getId(), ", Nombre: ").concat(cliente['nombre']));
});
veterinaria1.altaProveedor(Proveedor1);
veterinaria1.altaProveedor(Proveedor2);
veterinaria1.imprimirProveedores();
veterinaria1.modificarProveedor("Comidapaperro", "Comidaspagato", 145343454);
veterinaria1.imprimirProveedores();
veterinaria1.bajaProveedor(Proveedor1);
veterinaria1.bajaProveedor(Proveedor2);
veterinaria1.imprimirProveedores();
var mascota1 = new Mascota_1.Mascota("Chiquito", "Cerdo", 1);
var mascota2 = new Mascota_1.Mascota("Odin", "Gato", 2);
var mascota3 = new Mascota_1.Mascota("Ocico", "Perro", 3);
cliente1.agregarMascota(mascota1);
cliente1.agregarMascota(mascota2);
cliente2.agregarMascota(mascota2);
cliente3.agregarMascota(mascota3);
cliente1.incrementarVisitas();
cliente1.incrementarVisitas();
cliente1.esONoVip();
cliente2.esONoVip();
cliente3.esONoVip();
console.log(cliente1);
cliente1.modificarMascota("Chiquito", "Grandote", "Vaca");
console.log(cliente1);
console.log(cliente2);
console.log(cliente3);
veterinaria1.bajaCliente(cliente1);
veterinaria1.bajaCliente(cliente2);
veterinaria1.bajaCliente(cliente3);
veterinaria1.imprimirClientes();
>>>>>>> 8f24e6c3ccefd453de0d9f58a4e039229aff8156
