"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.asegurarIdUnico = void 0;
var uuid_1 = require("uuid");
//ESTO NO ES UNA CLASE, ES UN ARCHIVO APARTE QUE ME PERMITE ORGANIZAR FUNCIONES 
// Y LUEGO LAS EXPORTO CUANDO LAS NECESITE EN LAS DIFERENTES PARTES DEL PROYECTO
// creo una funcion donde recibe como paramentro un objeto y los guarda
// en una lista para luego iterar sobre ella y asegurarnos de que todos
// tengan un id unico
function asegurarIdUnico(objetos) {
    var ids = []; // array donde almaceno los ids
    for (var _i = 0, objetos_1 = objetos; _i < objetos_1.length; _i++) {
        var objeto = objetos_1[_i];
        var id = objeto.getId();
        //verifico si el id ya existe en la lista
        while (ids.includes(id)) {
            id = (0, uuid_1.v4)(); // genera nuevo id si el id esta duplicado
            objeto.setId(id); //asignamos el nuevo id al objeto
        }
        ids.push(id); // agregamos el id al array de IDs
    }
}
exports.asegurarIdUnico = asegurarIdUnico;
