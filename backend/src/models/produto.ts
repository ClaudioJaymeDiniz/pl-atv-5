export class Produto {
    private nome: string;
    private preco!: string;

    constructor(nome: string, preco: string) {
        this.nome = nome;
    }

    public get getNome(): string {
        return this.nome;
    }
    
    public get getPreco(): string {
        return this.preco;
    }

}
