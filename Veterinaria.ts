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




    public altaProveedor(proveedor: Proveedor): void {
        proveedor.setId(uuidv4());
        this.listaProveedores.push(proveedor);
        console.log(`Proveedor ${proveedor.nombre} agregado con éxito`);
        
    }
    
    public bajaProveedor(nombre: string): void {
        const index = this.listaProveedores.findIndex((p) => p.nombre === nombre);
        if (index !== -1) {
            this.listaProveedores.splice(index, 1);
            console.log(`Proveedor ${nombre} eliminado con éxito!`);
        } else {
            console.log(`Proveedor ${nombre} no encontrado.`);
        }
        
    }

    public obtenerProveedores(): Proveedor[] {
        return this.listaProveedores;
    }


    public imprimirProveedores(): void {
        if(this.listaProveedores.length === 0) {
            console.log("No hay proveedores registrados.");
        }else {
            console.log("Lista de proveedores: ");
            this.listaProveedores.forEach((p) => console.log(`${p.nombre} | Telefono: ${p.telefono} | Producto: ${p.producto}`)
            );
        }
    }

    public modificarProveedor(nombre : string, nuevoNombre?: string, nuevoTelefono?: number, nuevoProducto?:string): boolean {
        const proveedor = this.listaProveedores.find((p) => p.nombre === nombre);
        if(proveedor) {
            proveedor.nombre = nuevoNombre || proveedor.nombre;
            proveedor.telefono = nuevoTelefono || proveedor.telefono;
            proveedor.producto = nuevoProducto || proveedor.producto;

            console.log(`Proveedor ${nombre} modificado con éxito!`);
            return true;
        }else {
            console.log(`Proveedor ${nombre} no encontrado.`);
            return false;
        }

    }

    
    

}
