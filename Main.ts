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
    6. Alta de proveedor.
    7. Modificar proveedor.
    8. Baja de proveedor.
    9. Imprimir proveedor
    10. Salir.
    `);

    const opcion = readlineSync.question("Seleccione una opción: ");

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
