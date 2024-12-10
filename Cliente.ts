import { Persona } from "./Persona";
import { Mascota } from "./Mascota";

export class Cliente extends Persona {

    id: string;
    public mascotas: Mascota[] = [];
    visitas: number;
    esVip: boolean;


    constructor(nombre:string, telefono:number, Mascota?: Mascota, id?:string, esVip?:boolean,  visitas?:number) {
        super(nombre, telefono);

        this.mascotas = this.mascotas;
        this.visitas = this.visitas;
        this.esVip = false;
    }


    getId() {
        return this.id;
    }

    setId(id:string): void {
        this.id = id;
    }

    getMascotas() {
        return this.mascotas;
    }

    setMascotas(mascotas:Mascota[]): void {
        this.mascotas = mascotas;
    }

    getVisitas() {
        return this.visitas;
    }

    setVisitas(visitas:number): void {
        this.visitas = visitas;
    }


    public mostrarCliente(): string {
        return `ID: ${this.id}, Nombre: ${this.nombre}, Teléfono: ${this.telefono}`;
    }

    incrementarVisitas():void {
        this.visitas ++;
    }

    public esonoVip():void {
        if(this.visitas >= 5) {
            this.esVip = true;
            console.log(`${this.nombre} es VIP`);
        } else {
            console.log(`${this.nombre} no es VIP`);
        }
        
    }

    public agregarMascota(mascota : Mascota):void {
        this.mascotas.push(mascota);
        console.log(`Mascota ${mascota.nombre} agregada a ${this.nombre}. `);
        
    }

    public obtenerMacota(): Mascota[] {
        return this.mascotas;
    }

    public imprimirMascota():void {
        if(this.mascotas.length == 0) {
            console.log(`${this.nombre} no tiene mascota`);
            
        }else {
            console.log(`Mascota de ${this.nombre}: `);
            this.mascotas.forEach((m) => console.log(`- ${m.nombre} (${m.especie})`));
        }
    }


    public modificarMascota( nombre: string, nuevonombre: string, nuevaespecie : string): void {
        const mascotaEncontrada = this.mascotas.findIndex(mascota => mascota.getNombre() === nombre);
        if (mascotaEncontrada !== -1) {
            

            this.mascotas[mascotaEncontrada].setNombre(nuevonombre);
            
            this.mascotas[mascotaEncontrada].setEspecie(nuevaespecie);
            
            console.log("Se ha modificado la mascota: " + nombre);
        } else {
            console.log("No se ha encontrado la mascota: " + nombre);
        }
        if(nuevaespecie.toLowerCase() !== "perro" && nuevaespecie.toLowerCase() !== "gato") {
            this.mascotas[mascotaEncontrada].setEspecie( "Exótico");
        }
    }

}