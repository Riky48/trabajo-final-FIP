export class Proveedor {
    private id: string;
    private nombre: string;
    private telefono: string;

    constructor(nombre: string, telefono: string) {
        this.nombre = nombre;
        this.telefono = telefono;
    }

    getNombre(): string {
        return this.nombre;
    }

    setNombre(nombre: string): void {
        this.nombre = nombre;
    }

    getTelefono(): string {
        return this.telefono;
    }

    setTelefono(telefono: string): void {
        this.telefono = telefono;
    }

    getId(): string {
        return this.id;
    }

    setId(id: string): void {
        this.id = id;
    }
}