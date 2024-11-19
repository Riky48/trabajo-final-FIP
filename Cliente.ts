import { Mascota } from "./Mascota";

export class Cliente {
    nombre: string;
    telefono: number;
    id: string;
    mascotas: Mascota[];

    constructor(nombre:string, telefono:number, id:string) {
        this.nombre = nombre;
        this.telefono = telefono;
        this.id = id;
    }

    getNombre() {
        return this.nombre;
    }

    setNombre(nombre:string): void {
        this.nombre = nombre;
    }


    getTelefono() {
        return this.telefono;
    }

    setTelefono(telefono:number): void {
        this.telefono = telefono;
    }

    getId() {
        return this.id;
    }

    setId(id:string): void {
        this.id = id;
    }
}