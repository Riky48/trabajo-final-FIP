export abstract class Persona {
    protected nombre: string;
    private telefono: number;

    constructor(nombre:string, telefono:number) {
        this.nombre = nombre;
        this.telefono = telefono;
    }

    getNombre() {
        return this.nombre;
    }

    setNombre(nombre:string):void {
        this.nombre = nombre;
    }

    getTelefono() {
        return this.telefono;
    }

    setTelefono(telefono:number):void {
        this.telefono = telefono;
    }
}