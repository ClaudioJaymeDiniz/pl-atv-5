"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CPF = void 0;
class CPF {
    constructor(numero) {
        this.numero = numero;
    }
    get getNumero() {
        return this.numero;
    }
}
exports.CPF = CPF;
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
