export class Mascota {
    nombre: string;
    especie: string;
    id: number;

    constructor(nombre:string, especie:string, id:number) {
        this.nombre = nombre;
        this.especie = especie;
        this.id = id;

        if(this.especie.toLowerCase() !== "perro" && this.especie.toLowerCase() !== "gato") {
            this.especie = "Exótico";
        }
    }

    getNombre() {
        return this.nombre;
    }

    setNombre(nombre:string): void {
        this.nombre = nombre;
    }

    getEspecie() {
        return this.especie;
    }

    setEspecie(especie:string): void {
        this.especie = especie;
    }

    getId() {
        return this.id;
    }

    setId(id:number): void {
        this.id = id;
    }
}