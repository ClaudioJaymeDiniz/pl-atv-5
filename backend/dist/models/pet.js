"use strict";
// export class Pet {
//     private nome: string;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pet = void 0;
//     constructor(nome: string) {
//         this.nome = nome;
//     }
//     public get getNome(): string {
//         return this.nome;
//     }
// }
class Pet {
    constructor(nome, raca, genero, tipo) {
        this.nome = nome;
        this.raca = raca;
        this.genero = genero;
        this.tipo = tipo;
    }
    get getNome() { return this.nome; }
    get getRaca() { return this.raca; }
    get getGenero() { return this.genero; }
    get getTipo() { return this.tipo; }
    setNome(nome) { this.nome = nome; }
    setRaca(raca) { this.raca = raca; }
    setGenero(genero) { this.genero = genero; }
    setTipo(tipo) { this.tipo = tipo; }
}
exports.Pet = Pet;
