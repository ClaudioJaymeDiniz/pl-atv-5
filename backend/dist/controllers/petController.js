"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cadastrarPet = void 0;
const pet_1 = require("../models/pet"); // Verifique o caminho correto conforme a estrutura do seu projeto
const cliente_1 = require("../models/cliente"); // Verifique o caminho correto conforme a estrutura do seu projeto
const cpf_1 = require("../models/cpf");
// Exemplo de lista de clientes para simular um banco de dados
const clientes = [
    new cliente_1.Cliente('Cliente 1', 'Nome Social 1', new cpf_1.CPF('12345678900')),
    // Adicione mais clientes conforme necessário
];
const cadastrarPet = (req, res) => {
    const { clienteCpf, nomePet, tipoPet, racaPet, generoPet } = req.body;
    const cliente = clientes.find(c => c.getCpf().getNumero === clienteCpf); // Correção aqui
    if (cliente) {
        const pet = new pet_1.Pet(nomePet, racaPet, generoPet, tipoPet);
        cliente.addPet(pet);
        res.status(201).json({ message: 'Pet cadastrado com sucesso!' });
    }
    else {
        res.status(404).json({ message: 'Cliente não encontrado.' });
    }
};
exports.cadastrarPet = cadastrarPet;
