import { Veterinaria } from "./Veterinaria";
import { v4 as uuidv4 } from 'uuid';

export class RedVeterinarias {
    public nombre : string;
    private id: number = Math.floor(Math.random() * 1000000000);
    private veterinarias: Veterinaria[] = [];

    constructor() {
        this.veterinarias = [];
    }

    getNombre(): string {
        return this.nombre;
    }

    getId(): number {
        return this.id;
    }

    

    public altaVeterinaria(veterinaria: Veterinaria): void {
        veterinaria.setId(uuidv4());
        this.veterinarias.push(veterinaria);
        
    }
    
    public bajaVeterinaria(veterinaria: Veterinaria): void {
        const index = this.veterinarias.indexOf(veterinaria);
        if (index !== -1) {
            this.veterinarias.splice(index, 1);
            console.log("Se ha eliminado la veterinaria: " + veterinaria.getNombre());
        } else {
            console.log("No se ha encontrado la veterinaria: " + veterinaria.getNombre());
        }
    }

    public obtenerVeterinarias(): Veterinaria[] {
        return this.veterinarias;
    }

    

    public modificarVeterinaria( nombre: string, nuevonombre : string, nuevadireccion: string, nuevotelefono: number): void {
        const veteEncontrada = this.veterinarias.findIndex(veterinaria => veterinaria.getNombre() === nombre);
        if (veteEncontrada !== -1) {
            this.veterinarias[veteEncontrada].setNombre(nuevonombre);
            this.veterinarias[veteEncontrada].setDireccion(nuevadireccion);
            this.veterinarias[veteEncontrada].setTelefono(nuevotelefono);
            console.log("Se ha modificado la veterinaria: " + nombre);
        } else {
            console.log("No se ha encontrado la veterinaria: " + nombre);
        }

    }

    public imprimirVeterinarias(): void {
        if(this.veterinarias.length === 0) {
            console.log("No hay sucursales regsitradas.");
        }else {
            console.log("Sucursales: ");
            this.veterinarias.forEach((sucursal, index) => {
                console.log(`${index + 1}. ${sucursal.nombre}`);
                
            });
        }
    }

}