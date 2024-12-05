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
    }

    public obtenerVeterinarias(): Veterinaria[] {
        return this.Veterinarias;
    }

    

    public modificarVeterinaria( nombre: string, nuevonombre : string, nuevadireccion: string, nuevotelefono: number): void {
        const veteEncontrada = this.Veterinarias.findIndex(veterinaria => veterinaria.getNombre() === nombre);
        if (veteEncontrada !== -1) {
            this.Veterinarias[veteEncontrada].setNombre(nuevonombre);
            this.Veterinarias[veteEncontrada].setDireccion(nuevadireccion);
            this.Veterinarias[veteEncontrada].setTelefono(nuevotelefono);
            console.log("Se ha modificado la veterinaria: " + nombre);
        } else {
            console.log("No se ha encontrado la veterinaria: " + nombre);
        }

    }

    public imprimirVeterinarias(): void {
        const veterinarias = this.obtenerVeterinarias();
        if (veterinarias.length === 0) {
            console.log("No hay veterinarias en la lista.");
        } else {
            // Imprime cada veterinaria usando el método mostrarVeterinaria()
            veterinarias.forEach(veterinarias => {
                console.log(veterinarias.mostrarVeterinaria());
            });
        }
    }

}