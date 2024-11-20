import { IdUnico } from "./IdUnico";
import { Cliente } from './Cliente';
import { Mascota } from './Mascota';
import { v4 as uuidv4 } from 'uuid';
import { Proveedor } from "./Proveedor";


export class Veterinaria  implements IdUnico {
    private id: string;
    private nombre: string;
    private direccion: string;
    private telefono: string;
    private listaClientes: Cliente[] = [];
    private listaMascotas: Mascota[] = [];
    private listaProveedores:Proveedor[] = [];
    
    
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
        this.listaClientes.push(cliente);
        
    }
    
    public bajaCliente(cliente: Cliente): void {
        const index = this.listaClientes.indexOf(cliente);
        if (index !== -1) {
            this.listaClientes.splice(index, 1);
            console.log("Se ha eliminado el cliente: " + cliente.getNombre());
        } else {
            console.log("No se ha encontrado el cliente: " + cliente.getNombre());
        }
        this.listaClientes.splice(this.listaClientes.indexOf(cliente), 1);
    }

    public obtenerClientes(): Cliente[] {
        return this.listaClientes;
    }

    public modificarCliente(id: string, nombre: string, direccion: string, telefono: number): void {
        const clienteEncontrado = this.listaClientes.findIndex(cliente => cliente.getId() === id);
        if (clienteEncontrado !== -1) {
            this.listaClientes[clienteEncontrado].setNombre(nombre);
            
            this.listaClientes[clienteEncontrado].setTelefono(telefono);
            console.log("Se ha modificado el cliente: " + nombre);
        } else {
            console.log("No se ha encontrado el cliente: " + nombre);
        }
    }




    public altaProveedor(listaProveedores: Proveedor): void {
        listaProveedores.setId(uuidv4());
        this.listaProveedores.push(listaProveedores);
        
    }
    
    public bajaProveedor(proveedor: Proveedor): void {
        const index = this.listaProveedores.indexOf(proveedor);
        if (index !== -1) {
            this.listaProveedores.splice(index, 1);
            console.log("Se ha eliminado el proveedor: " + proveedor.getNombre());
        } else {
            console.log("No se ha encontrado el proveedor: " + proveedor.getNombre());
        }
        this.listaProveedores.splice(this.listaProveedores.indexOf(proveedor), 1);
    }

    public obtenerProveedores(): Proveedor[] {
        return this.listaProveedores;
    }

    public modificarProveedor(id: string, nombre: string, telefono: number): void {
        const provEncontrado = this.listaProveedores.findIndex(proveedor => proveedor.getId() === id);
        if (provEncontrado !== -1) {
            this.listaProveedores[provEncontrado].setNombre(nombre);
            this.listaProveedores[provEncontrado].setTelefono(telefono);
            console.log("Se ha modificado el proveedor: " + nombre);
        } else {
            console.log("No se ha encontrado el proveedor: " + nombre);
        }
    
    }


    public agregarMascota(listaMascotas:Mascota):void {
        this.listaMascotas.push(listaMascotas);
    }

}
