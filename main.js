"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Mascota_1 = require("./Mascota");
var Veterinaria_1 = require("./Veterinaria");
var Cliente_1 = require("./Cliente");
var readlineSync = require("readline-sync");
var veterinaria1 = new Veterinaria_1.Veterinaria("algo", "algo", 23);
function main() {
    var veterinaria = new Veterinaria_1.Veterinaria("algo", "algo", 12);
    var continuar = true;
    var _loop_1 = function () {
        console.log("\n    ===== Men\u00FA Veterinaria =====\n    1. Alta de Cliente.\n    2. Baja de Cliente.\n    3. Modificar cliente.\n    4. Imprimir Clientes.\n    5. Gestionar mascotas.\n    6. Salir.\n    ");
        var opcion = readlineSync.question("Seleccione una opción: ");
        switch (opcion.trim()) {
            case "1": {
                // Alta de Cliente
                var nombre = readlineSync.question("Ingrese el nombre del cliente: ");
                var telefono = readlineSync.question("Ingrese el teléfono del cliente: ");
                var nuevoCliente = new Cliente_1.Cliente(nombre, telefono);
                veterinaria.altaCliente(nuevoCliente);
                if (true) {
                    var agregarmascota = readlineSync.keyInYNStrict("queres agregar una mascota?: ");
                    if (agregarmascota) {
                        var nombre_1 = readlineSync.question("nombre de tu mascota: ");
                        var especie = readlineSync.question("especie de tu masctoa: ");
                        var nuevaMascota = new Mascota_1.Mascota(nombre_1, especie);
                        nuevoCliente.agregarMascota(nuevaMascota);
                    }
                    else {
                        console.log("volviendo al menu principal");
                    }
                    break;
                }
            }
            case "2": {
                // Baja de Cliente
                veterinaria.imprimirClientes();
                var nombre_2 = readlineSync.question("Ingrese el nombre del cliente a eliminar: ");
                var clienteAEliminar = veterinaria.obtenerClientes().find(function (c) { return c.nombre === nombre_2; });
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
/*
const redVeterinarias = new RedVeterinarias("Riky");

const veterinaria1 = new Veterinaria("Alex", "Calle de la Veterinaria", 12345678);
const veterinaria2 = new Veterinaria("richardinson", "piedras 555", 12345678666);


redVeterinarias.altaVeterinaria(veterinaria1);
redVeterinarias.altaVeterinaria(veterinaria2);

redVeterinarias.imprimirVeterinarias();

redVeterinarias.modificarVeterinaria("Alex", "Alexandria", "elvago 5656", 556678);
redVeterinarias.imprimirVeterinarias();

redVeterinarias.bajaVeterinaria(veterinaria1);
redVeterinarias.bajaVeterinaria(veterinaria2);

redVeterinarias.imprimirVeterinarias();

/*
let Proveedor1 = new Proveedor("Comidapaperro", 14554);
let Proveedor2 = new Proveedor("Comidaspaexoticos", 1455554);



let cliente1 = new Cliente("Juan", 12345678, 6);
let cliente2 = new Cliente("Pedro", 98765432, 2);
let cliente3 = new Cliente("Maria", 11111111, 0);

veterinaria1.altaCliente(cliente1);
veterinaria1.altaCliente(cliente2);
veterinaria1.altaCliente(cliente3);

veterinaria1.altaProveedor(Proveedor1);
veterinaria1.altaProveedor(Proveedor2);

veterinaria1.imprimirProveedores();

veterinaria1.modificarProveedor("Comidapaperro", "Comidaspagato", 145343454);

veterinaria1.imprimirProveedores();
veterinaria1.bajaProveedor(Proveedor1);
veterinaria1.bajaProveedor(Proveedor2);

veterinaria1.imprimirProveedores();

let mascota1 = new Mascota("Chiquito", "Cerdo", 1);
let mascota2 = new Mascota("Odin", "Gato", 2);
let mascota3 = new Mascota("Ocico", "Perro", 3);



cliente1.agregarMascota(mascota1);
cliente1.agregarMascota(mascota2);
cliente2.agregarMascota(mascota2);
cliente3.agregarMascota(mascota3);




/*cliente1.incrementarVisitas();
cliente1.incrementarVisitas();
cliente1.esonoVip();
cliente2.esonoVip();
cliente3.esonoVip();

console.log(cliente1);

cliente1.modificarMascota("Chiquito", "Grandote", "Vaca");

console.log(cliente1);
console.log(cliente2)
console.log(cliente3)

veterinaria1.bajaCliente(cliente1);
veterinaria1.bajaCliente(cliente2);
veterinaria1.bajaCliente(cliente3);
veterinaria1.imprimirClientes(); */ 
