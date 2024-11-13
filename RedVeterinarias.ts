import { Veterinaria } from "./Veterinaria";
import { v4 as uuidv4 } from 'uuid';
export class RedVeterinarias {
    private nombre : string;
    private id: number = Math.floor(Math.random() * 1000000000);
    private Veterinarias: Veterinaria[] = [];

    constructor(nombre: string) {
        this.nombre = nombre;
    }

    getNombre(): string {
        return this.nombre;
    }

    getId(): number {
        return this.id;
    }

    public altaVeterinaria(veterinaria: Veterinaria): void {
        veterinaria.setId(uuidv4());
        this.Veterinarias.push(veterinaria);
        
    }
    
    public bajaVeterinaria(veterinaria: Veterinaria): void {
        const index = this.Veterinarias.indexOf(veterinaria);
        if (index !== -1) {
            this.Veterinarias.splice(index, 1);
            console.log("Se ha eliminado la veterinaria: " + veterinaria.getNombre());
        } else {
            console.log("No se ha encontrado la veterinaria: " + veterinaria.getNombre());
        }
        this.Veterinarias.splice(this.Veterinarias.indexOf(veterinaria), 1);
    }

    public obtenerVeterinarias(): Veterinaria[] {
        return this.Veterinarias;
    }

    public modificarVeterinaria(id: string, nombre: string, direccion: string, telefono: string): void {
        const veteEncontrada = this.Veterinarias.findIndex(veterinaria => veterinaria.getId() === id);
        if (veteEncontrada !== -1) {
            this.Veterinarias[veteEncontrada].setNombre(nombre);
            this.Veterinarias[veteEncontrada].setDireccion(direccion);
            this.Veterinarias[veteEncontrada].setTelefono(telefono);
            console.log("Se ha modificado la veterinaria: " + nombre);
        } else {
            console.log("No se ha encontrado la veterinaria: " + nombre);
        }
    }

   
}