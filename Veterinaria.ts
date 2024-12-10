import { IdUnico } from "./IdUnico";
import { Cliente } from './Cliente';
import { v4 as uuidv4 } from 'uuid';
import { Proveedor } from "./Proveedor";


export class Veterinaria  implements IdUnico {
    private id: string;
    public nombre: string;
    private direccion: string;
    private telefono: number;
    private listaClientes: Cliente[] = [];
    
    private listaProveedores:Proveedor[] = [];
    
    
    constructor(nombre: string, direccion: string, telefono: number) {
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

    getTelefono(): number {
        return this.telefono;
    }

    setTelefono(telefono: number): void {
        this.telefono = telefono;
    }

    getId(): string {
        return this.id;
    }

    setId(id: string): void {
        this.id = id;
    }

    public mostrarVeterinaria(): string {
        return `ID: ${this.id}, Nombre: ${this.nombre}, Teléfono: ${this.telefono}`;
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
        
    }

    public obtenerClientes(): Cliente[] {
        return this.listaClientes;
    }

    
    public imprimirClientes(): void {
        const clientes = this.obtenerClientes();
        if (clientes.length === 0) {
            console.log("No hay clientes en la lista.");
        } else {
            // Imprime cada cliente usando el método mostrarCliente()
            clientes.forEach(cliente => {
                console.log(cliente.mostrarCliente());
                cliente.imprimirMascota();
            });
        }
    }

    public modificarCliente( nombre: string): Cliente | null{
        const cliente = this.listaClientes.find((c) => c.nombre === nombre);
        if(!cliente) {
            console.log(`Cliente ${nombre} no encontrado.`);
            return null;
        }
        return cliente;
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
        
    }

    public obtenerProveedores(): Proveedor[] {
        return this.listaProveedores;
    }

    public imprimirProveedores(): void {
        const clientes = this.obtenerProveedores();
        if (clientes.length === 0) {
            console.log("No hay proveedores en la lista.");
        } else {
            // Imprime cada proveedor usando el método mostrarProveedor()
            clientes.forEach(cliente => {
                console.log(cliente.mostrarProveedor());
            });
        }
    }

    public modificarProveedor(nombre : string, nuevonombre: string, nuevotelefono: number): void {
        const provEncontrado = this.listaProveedores.findIndex(proveedor => proveedor.getNombre() === nombre);
        if (provEncontrado !== -1) {
            this.listaProveedores[provEncontrado].setNombre(nuevonombre);
            this.listaProveedores[provEncontrado].setTelefono(nuevotelefono);
            console.log("Se ha modificado el proveedor: " + nombre);
        } else {
            console.log("No se ha encontrado el proveedor: " + nombre);
        }
    
    }

    
    

}
