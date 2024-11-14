export class Mascota {
    nombre: string;
    especie: string;
    id: number;

    constructor(nombre:string, especie:string, id:number) {
        this.nombre = nombre;
        this.especie = especie;
        this.id = id;

        if(this.especie != "perro" && this.especie != "gato") {
            this.especie = "Exotico";
        }
    }

    getNombre() {
        return this.nombre;
    }

    getEspecie() {
        return this.especie;
    }

    getId() {
        return this.id;
    }

    setId(id:number): void {
        this.id = id;
    }
}