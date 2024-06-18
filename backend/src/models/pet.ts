// export class Pet {
//     private nome: string;
    

//     constructor(nome: string) {
//         this.nome = nome;
//     }

//     public get getNome(): string {
//         return this.nome;
//     }
// }

export class Pet {
    private nome: string;
    private tipo: string;
    private raca: string;
    private genero: string;

    constructor(nome: string, raca: string, genero: string, tipo: string) {
        this.nome = nome;
        this.raca = raca;
        this.genero = genero;
        this.tipo = tipo;
    }

    public get getNome() { return this.nome; }
    public get getRaca() { return this.raca; }
    public get getGenero() { return this.genero; }
    public get getTipo() { return this.tipo; }

    public setNome(nome: string) { this.nome = nome; }
    public setRaca(raca: string) { this.raca = raca; }
    public setGenero(genero: string) { this.genero = genero; }
    public setTipo(tipo: string) { this.tipo = tipo; }
}
