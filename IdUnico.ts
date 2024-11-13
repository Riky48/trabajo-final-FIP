

//esta interface nos permite garantizar que todos}
// los objetos donde se implemente tengan un getid() y un setId() para se
// asegurarnos de que tienen un id unico 
export interface IdUnico {
    getId(): string;
    setId(id: string): void;
}