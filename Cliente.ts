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

    public esONoVip():void {
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


    public modificarMascota( nombre: string, nuevoNombre: string, nuevaEspecie : string): boolean {
        const mascota = this.mascotas.find((m) => m.nombre === nombre);
        if(mascota) {
            mascota.nombre = nuevoNombre;
            mascota.especie = nuevaEspecie;
            console.log(`Mascota ${mascota.nombre} modificada con exito.`);
            return true;
        }else {
            console.log(`Mascota ${nombre} modificada con exito.`);
            return false
        }
    }

    public eliminarMascota(nombre:string): boolean {
        const index = this.mascotas.findIndex((m) => m.nombre === nombre);
        if(index !== -1) {
            this.mascotas.splice(index, 1);
            console.log(`Mascota ${nombre} eliminada con éxito.`);
            return true;
        }else {
            console.log(`Mascota ${nombre} no encontrada.`);
            return false;
        
    }

    }
}