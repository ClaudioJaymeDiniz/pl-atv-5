export class CPF {
    private numero: string;

    constructor(numero: string) {
        this.numero = numero;
    }

    public get getNumero(): string {
        return this.numero;
    }
}

// export class CPF {
//     private valor: string
//     private dataEmissao: Date
//     constructor(valor: string, dataEmissao: Date) {
//         this.valor = valor
//         this.dataEmissao = dataEmissao
//     }
//     public get getValor(): string {
//         return this.valor
//     }
//     public get getDataEmissao(): Date {
//         return this.dataEmissao
//     }
// }