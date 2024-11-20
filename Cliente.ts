import { Mascota } from "./Mascota";

export class Cliente {
    nombre: string;
    telefono: number;
    id: string;
    mascotas: Mascota[];
    visitas: number;
    esVip: boolean;

    constructor(nombre:string, telefono:number, id:string, visitas:number, esVip?:boolean) {
        this.nombre = nombre;
        this.telefono = telefono;
        this.id = id;
        this.visitas = 0;
        this.esVip = false;
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

    incrementarVisitas():void {
        this.visitas += 1;
        if(this.visitas >= 5) {
            this.convertirVip();
        }
    }

    private convertirVip():void {
        this.esVip = true;
        console.log(`${this.nombre} ahora es VIP`);
    }
}