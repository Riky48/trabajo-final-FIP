import { RedVeterinarias } from "./RedVeterinarias";
import { Mascota } from "./Mascota";
import { Veterinaria } from "./Veterinaria";
import { Cliente } from "./Cliente";
import { Proveedor } from "./Proveedor";
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




cliente1.incrementarVisitas();
cliente1.incrementarVisitas();
cliente1.esONoVip();
cliente2.esONoVip();
cliente3.esONoVip();

console.log(cliente1);

cliente1.modificarMascota("Chiquito", "Grandote", "Vaca");

console.log(cliente1);
console.log(cliente2)
console.log(cliente3)

veterinaria1.bajaCliente(cliente1);
veterinaria1.bajaCliente(cliente2);
veterinaria1.bajaCliente(cliente3);
veterinaria1.imprimirClientes(); 