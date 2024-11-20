import { Persona } from "./Persona";

export class Proveedor extends Persona {
    private id: string;

    constructor(nombre: string, telefono: number) {
        super(nombre, telefono)
    }


    getId(): string {
        return this.id;
    }

    setId(id: string): void {
        this.id = id;
    }
}