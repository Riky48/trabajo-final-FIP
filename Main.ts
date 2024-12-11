import { RedVeterinarias } from "./RedVeterinarias";
import { Mascota } from "./Mascota";
import { Veterinaria } from "./Veterinaria";
import { Cliente } from "./Cliente";
import { Proveedor } from "./Proveedor";
<<<<<<< HEAD
import * as readlineSync from "readline-sync";
=======
import { asegurarIdUnico } from "./Utilidades";



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



// Verifica los resultados


let Proveedor1 = new Proveedor("Comidapaperro", 14554);
let Proveedor2 = new Proveedor("Comidaspaexoticos", 1455554);



let cliente1 = new Cliente("Juan", 12345678, 6);
let cliente2 = new Cliente("Pedro", 98765432, 2);
let cliente3 = new Cliente("Maria", 11111111, 0);

veterinaria1.altaCliente(cliente1);
veterinaria1.altaCliente(cliente2);
veterinaria1.altaCliente(cliente3);

const clientes : Cliente [] = [cliente1, cliente2, cliente3];

asegurarIdUnico(clientes);                                                          // verifica que todos los clientes tengan un id unico

clientes.forEach(cliente => {
    console.log(`ID: ${cliente.getId()}, Nombre: ${cliente['nombre']}`);
});

 
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
>>>>>>> 8f24e6c3ccefd453de0d9f58a4e039229aff8156




<<<<<<< HEAD
function main() {
    const veterinaria = new Veterinaria("algo", "algo", 12);
=======
cliente1.incrementarVisitas();
cliente1.incrementarVisitas();
cliente1.esONoVip();
cliente2.esONoVip();
cliente3.esONoVip();
>>>>>>> 8f24e6c3ccefd453de0d9f58a4e039229aff8156

    let continuar = true;

    while (continuar) {
    console.log(`
    ===== Menú Veterinaria =====
    1. Alta de Cliente.
    2. Baja de Cliente.
    3. Modificar cliente.
    4. Imprimir Clientes.
    5. Gestionar mascotas.
    6. Alta de proveedor.
    7. Modificar proveedor.
    8. Baja de proveedor.
    9. Imprimir proveedor
    10. Salir.
    `);

    const opcion = readlineSync.question("Seleccione una opción: ");

<<<<<<< HEAD
    switch (opcion.trim()) {
        case "1": {
          // Alta de Cliente
            const nombre = readlineSync.question("Ingrese el nombre del cliente: ");
            const telefono = readlineSync.question("Ingrese el teléfono del cliente: ");
            const nuevoCliente = new Cliente(nombre, telefono,);
            veterinaria.altaCliente(nuevoCliente);

            let agregarOtraMascota = true;
            while(agregarOtraMascota) {
                const deseaAgregarMascota = readlineSync.keyInYNStrict(`Desea agregar una mascota?.`);
                if(deseaAgregarMascota) {
                    const nombreMascota = readlineSync.question("Nombre de la mascota: ");
                    const especie = readlineSync.question("Especie de la mascota: ");
                    const nuevaMascota = new Mascota(nombreMascota, especie);

                    nuevoCliente.agregarMascota(nuevaMascota);
                    console.log(`Mascota ${nombreMascota} (${especie}) agregada con éxito!`);
                } else {
                    agregarOtraMascota = false;
                }
            }
            break;
            
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
            const nombre = readlineSync.question("Ingrese el nombre del proveedor: ");
            const telefono = readlineSync.question("Ingrese el telefono del proveedor: ");
            const producto = readlineSync.question("Ingrese el producto que provee: ");
            const nuevoProveedor = new Proveedor(nombre, telefono, producto);

            veterinaria.altaProveedor(nuevoProveedor);
            break;
        }
        case "7": {
            const nombre = readlineSync.question("Ingrese el nombre del proveedor que quieras modificar: ");
            const proveedorExistente = veterinaria.modificarProveedor(nombre);

            if(proveedorExistente) {
                const nuevoNombre = readlineSync.question("Ingrese el nuevo nombre: ");
                const nuevoTelefono = readlineSync.question("Ingrese el nuevo telefono: ");
                const nuevoProducto = readlineSync.question("Ingrese el nuevo producto: ");

                veterinaria.modificarProveedor(nombre, nuevoNombre, nuevoTelefono, nuevoProducto);
            }
            break;
        }
        case "8": {
            const nombre = readlineSync.question("Ingrese el nombre del proveedor que quiere eliminar: ");
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
    }
    }
    
    // Ejecutar la aplicación
    main();
=======
veterinaria1.bajaCliente(cliente1);
veterinaria1.bajaCliente(cliente2);
veterinaria1.bajaCliente(cliente3);
veterinaria1.imprimirClientes(); 
>>>>>>> 8f24e6c3ccefd453de0d9f58a4e039229aff8156
