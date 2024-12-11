import { Persona } from "./Persona";

export class Proveedor extends Persona {
    private id: string;
    public producto: string;

    constructor(nombre: string, telefono: number, producto:string) {
        super(nombre, telefono)
        this.producto = producto;
    }


    getId(): string {
        return this.id;
    }

    setId(id: string): void {
        this.id = id;
    }

    public mostrarProveedor(): string {
        return `ID: ${this.id}, Nombre: ${this.nombre}, Teléfono: ${this.telefono}`;
    }
}