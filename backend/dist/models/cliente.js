"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cliente = void 0;
class Cliente {
    constructor(nome, nomeSocial, cpf) {
        this.nome = nome;
        this.nomeSocial = nomeSocial;
        this.cpf = cpf;
        this.rgs = [];
        this.dataCadastro = new Date();
        this.telefones = [];
        this.produtosConsumidos = [];
        this.servicosConsumidos = [];
        this.pets = [];
    }
    getCpf() {
        return this.cpf;
    }
    getRgs() {
        return this.rgs;
    }
    getDataCadastro() {
        return this.dataCadastro;
    }
    getTelefones() {
        return this.telefones;
    }
    getProdutosConsumidos() {
        return this.produtosConsumidos;
    }
    getServicosConsumidos() {
        return this.servicosConsumidos;
    }
    getPets() {
        return this.pets;
    }
    addPet(pet) {
        this.pets.push(pet);
    }
}
exports.Cliente = Cliente;
