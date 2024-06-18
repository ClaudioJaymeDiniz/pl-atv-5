"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.excluirCliente = exports.alterarCliente = exports.listarClientes = exports.cadastrarCliente = void 0;
const cliente_1 = require("../models/cliente");
const cpf_1 = require("../models/cpf");
let clientes = [];
const cadastrarCliente = (req, res) => {
    const { nome, nomeSocial, cpf } = req.body;
    const novoCliente = new cliente_1.Cliente(nome, nomeSocial, new cpf_1.CPF(cpf));
    clientes.push(novoCliente);
    res.status(201).send(novoCliente);
};
exports.cadastrarCliente = cadastrarCliente;
const listarClientes = (req, res) => {
    res.status(200).send(clientes);
};
exports.listarClientes = listarClientes;
const alterarCliente = (req, res) => {
    const { nome, nomeSocial, cpf } = req.body;
    const cliente = clientes.find(c => c.getCpf().getNumero === cpf); // Corrigido para acessar corretamente o CPF
    if (cliente) {
        cliente.nome = nome;
        cliente.nomeSocial = nomeSocial;
        res.status(200).send(cliente);
    }
    else {
        res.status(404).send({ message: 'Cliente não encontrado' });
    }
};
exports.alterarCliente = alterarCliente;
const excluirCliente = (req, res) => {
    const { cpf } = req.params;
    clientes = clientes.filter(c => c.getCpf().getNumero !== cpf); // Corrigido para acessar corretamente o CPF
    res.status(200).send({ message: 'Cliente excluído com sucesso' });
};
exports.excluirCliente = excluirCliente;
