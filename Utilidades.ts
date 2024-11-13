import { IdUnico } from "./IdUnico";
import { v4 as uuidv4 } from 'uuid';
//ESTO NO ES UNA CLASE, ES UN ARCHIVO APARTE QUE ME PERMITE ORGANIZAR FUNCIONES 
// Y LUEGO LAS EXPORTO CUANDO LAS NECESITE EN LAS DIFERENTES PARTES DEL PROYECTO

// creo una funcion donde recibe como paramentro un objeto y los guarda
// en una lista para luego iterar sobre ella y asegurarnos de que todos
// tengan un id unico

export function asegurarIdUnico(objetos: IdUnico[]): void { 
    const ids:string[] = []; // array donde almaceno los ids

    for (const objeto of objetos) {
        let id = objeto.getId();

        //verifico si el id ya existe en la lista
        while (ids.includes(id)) {
            id = uuidv4(); // genera nuevo id si el id esta duplicado
            objeto.setId(id);   //asignamos el nuevo id al objeto
        }

        ids.push(id); // agregamos el id al array de IDs
    }

    


}
