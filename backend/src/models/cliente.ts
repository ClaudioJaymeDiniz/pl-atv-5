// cliente.ts
import { CPF } from './cpf';
import { RG } from './rg';
import { Telefone } from './telefone';
import { Produto } from './produto';
import { Servico } from './servico';
import { Pet } from './pet';

export class Cliente {
    public nome: string;
    public nomeSocial: string;
    private cpf: CPF;
    private rgs: Array<RG>;
    private dataCadastro: Date;
    private telefones: Array<Telefone>;
    private produtosConsumidos: Array<Produto>;
    private servicosConsumidos: Array<Servico>;
    private pets: Array<Pet>;

    constructor(nome: string, nomeSocial: string, cpf: CPF) {
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

    public getCpf(): CPF {
        return this.cpf;
    }

    public getRgs(): Array<RG> {
        return this.rgs;
    }

    public getDataCadastro(): Date {
        return this.dataCadastro;
    }

    public getTelefones(): Array<Telefone> {
        return this.telefones;
    }

    public getProdutosConsumidos(): Array<Produto> {
        return this.produtosConsumidos;
    }

    public getServicosConsumidos(): Array<Servico> {
        return this.servicosConsumidos;
    }

    public getPets(): Array<Pet> {
        return this.pets;
    }

    public addPet(pet: Pet): void {
        this.pets.push(pet);
    }
}
