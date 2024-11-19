import { IdUnico } from "./IdUnico";
import { Cliente } from './Cliente';
import { Mascota } from './Mascota';
import { v4 as uuidv4 } from 'uuid';

export class Veterinaria implements IdUnico {
    private id: string;
    private nombre: string;
    private direccion: string;
    private telefono: string;
    private Clientes: Cliente[] = [];
    
    


    constructor(nombre: string, direccion: string, telefono: string) {
        this.nombre = nombre;
        this.direccion = direccion;
        this.telefono = telefono;
        
    }
    

    getNombre(): string {
        return this.nombre;
    }

    setNombre(nombre: string): void {
        this.nombre = nombre;
    }

    getDireccion(): string {
        return this.direccion;
    }

    setDireccion(direccion: string): void {
        this.direccion = direccion;
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

    public altaCliente(cliente: Cliente): void {
        cliente.setId(uuidv4());
        this.Clientes.push(cliente);
        
    }
    
    public bajaCliente(cliente: Cliente): void {
        const index = this.Clientes.indexOf(cliente);
        if (index !== -1) {
            this.Clientes.splice(index, 1);
            console.log("Se ha eliminado el cliente: " + cliente.getNombre());
        } else {
            console.log("No se ha encontrado el cliente: " + cliente.getNombre());
        }
        this.Clientes.splice(this.Clientes.indexOf(cliente), 1);
    }

    public obtenerClientes(): Cliente[] {
        return this.Clientes;
    }

    public modificarCliente(id: string, nombre: string, direccion: string, telefono: number): void {
        const clienteEncontrado = this.Clientes.findIndex(cliente => cliente.getId() === id);
        if (clienteEncontrado !== -1) {
            this.Clientes[clienteEncontrado].setNombre(nombre);
            
            this.Clientes[clienteEncontrado].setTelefono(telefono);
            console.log("Se ha modificado el cliente: " + nombre);
        } else {
            console.log("No se ha encontrado el cliente: " + nombre);
        }
}
}