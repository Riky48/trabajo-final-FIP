"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var RedVeterinarias_1 = require("./RedVeterinarias");
var Veterinaria_1 = require("./Veterinaria");
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
