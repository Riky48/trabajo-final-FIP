import { Persona } from "./Persona";
import { Mascota } from "./Mascota";

export class Cliente extends Persona {

    id: string;
    mascotas: Mascota[];
    visitas: number;
    esVip: boolean;


    constructor(nombre:string, telefono:number, id:string, visitas?:number, esVip?:boolean) {
        super(nombre, telefono);

        this.id = id;
        this.visitas = 0;
        this.esVip = false;
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