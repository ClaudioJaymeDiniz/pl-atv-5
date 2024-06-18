"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Produto = void 0;
class Produto {
    constructor(nome, preco) {
        this.nome = nome;
    }
    get getNome() {
        return this.nome;
    }
    get getPreco() {
        return this.preco;
    }
}
exports.Produto = Produto;
