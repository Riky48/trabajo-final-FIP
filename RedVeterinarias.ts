import { Veterinaria } from "./Veterinaria";
import { v4 as uuidv4 } from 'uuid';
import { Proveedor } from "./Proveedor";


export class RedVeterinarias {
    private nombre : string;
    private id: number = Math.floor(Math.random() * 1000000000);
    private Veterinarias: Veterinaria[] = [];
    private Proveedores: Proveedor[] = [];

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

    public altaProveedor(proveedor: Proveedor): void {
        proveedor.setId(uuidv4());
        this.Proveedores.push(proveedor);
        
    }
    
    public bajaProveedor(proveedor: Proveedor): void {
        const index = this.Proveedores.indexOf(proveedor);
        if (index !== -1) {
            this.Proveedores.splice(index, 1);
            console.log("Se ha eliminado el proveedor: " + proveedor.getNombre());
        } else {
            console.log("No se ha encontrado el proveedor: " + proveedor.getNombre());
        }
        this.Proveedores.splice(this.Proveedores.indexOf(proveedor), 1);
    }

    public obtenerProveedores(): Proveedor[] {
        return this.Proveedores;
    }

    public modificarProveedor(id: string, nombre: string, telefono: string): void {
        const provEncontrado = this.Proveedores.findIndex(proveedor => proveedor.getId() === id);
        if (provEncontrado !== -1) {
            this.Veterinarias[provEncontrado].setNombre(nombre);
            this.Veterinarias[provEncontrado].setTelefono(telefono);
            console.log("Se ha modificado el proveedor: " + nombre);
        } else {
            console.log("No se ha encontrado el proveedor: " + nombre);
        }
    
    }
}