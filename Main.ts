import { RedVeterinarias } from "./RedVeterinarias";
import { Mascota } from "./Mascota";
import { Veterinaria } from "./Veterinaria";
import { Cliente } from "./Cliente";
import { Proveedor } from "./Proveedor";
import * as readlineSync from "readline-sync";

const veterinaria1 = new Veterinaria("algo", "algo", 23)



function main() {
    const veterinaria = new Veterinaria("algo", "algo", 12);

    let continuar = true;

    while (continuar) {
    console.log(`
    ===== Menú Veterinaria =====
    1. Alta de Cliente.
    2. Baja de Cliente.
    3. Modificar cliente.
    4. Imprimir Clientes.
    5. Gestionar mascotas.
    6. Salir.
    `);

    const opcion = readlineSync.question("Seleccione una opción: ");

    switch (opcion.trim()) {
        case "1": {
          // Alta de Cliente
            const nombre = readlineSync.question("Ingrese el nombre del cliente: ");
            const telefono = readlineSync.question("Ingrese el teléfono del cliente: ");
            const nuevoCliente = new Cliente(nombre, telefono,);
            veterinaria.altaCliente(nuevoCliente);

            if(true) {
                const agregarmascota = readlineSync.keyInYNStrict(
                    "queres agregar una mascota?: "
                );
                if(agregarmascota) {
                    const nombre = readlineSync.question("nombre de tu mascota: ");
                    const especie = readlineSync.question("especie de tu masctoa: ");
                    const nuevaMascota = new Mascota(nombre, especie);
                    nuevoCliente.agregarMascota(nuevaMascota);
                } else {
                    console.log("volviendo al menu principal");
                }
                break;
            }
        }
        case "2": {
            // Baja de Cliente
            veterinaria.imprimirClientes();
            const nombre = readlineSync.question("Ingrese el nombre del cliente a eliminar: ");
            const clienteAEliminar = veterinaria.obtenerClientes().find(c => c.nombre === nombre);
            if (clienteAEliminar) {
            veterinaria.bajaCliente(clienteAEliminar);
            } else {
            console.log("Cliente no encontrado.");
            } 
            break;
        }
        case "3": {
            const nombre = readlineSync.question("Ingrese el nombre del cliente que quiere modificar: ");
            const cliente = veterinaria.modificarCliente(nombre);

            if(cliente) {
                console.log(`
                    ¿Que desea modificar?
                    1. Nombre.
                    2. Telefono.`);

                    const opcionModificar = readlineSync.question("Seleccione una opción: ");

                    switch(opcionModificar.trim()) {
                        case "1": {
                            const nuevoNombre = readlineSync.question("Ingrese el nuevo nombre: ");
                            cliente.nombre = nuevoNombre;
                            console.log("Nombre modificado con éxito.");
                            break;
                        }

                        case "2": {
                            const nuevoTelefono = readlineSync.question("Ingrese el nuevo telefono: ");
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
            const nombreCliente = readlineSync.question("Ingrese el nombre del cliente: ");
            const cliente = veterinaria.modificarCliente(nombreCliente);

            if(cliente) {
                console.log(`
                ¿Que desea hacer con la mascota?
                1. Modificar una mascota
                2. Eliminar una mascota`);
                
                const opcionMascotas = readlineSync.question("Seleccione una opción: ");

                switch(opcionMascotas.trim()) {
                    case "1": {
                        const nombreMascota = readlineSync.question("Ingrese el nombre de la mascota a modificar: ");
                        const nuevoNombre = readlineSync.question("Ingrese el nuevo nombre de la mascota: ");
                        const nuevaEspecie = readlineSync.question("Ingrese la nueva especie de la mascota: ");
                        cliente.modificarMascota(nombreMascota, nuevoNombre, nuevaEspecie);
                        break;
                    }
                    case "2": {
                        const nombreMascota = readlineSync.question("Ingrese el nombre de la mascota que desea eliminar: ");
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