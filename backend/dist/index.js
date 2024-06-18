"use strict";
// import express from 'express';
// import bodyParser from 'body-parser';
// import cors from 'cors';
// import router from './routes/router';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// const app = express();
// const port = 3001;
// app.use(bodyParser.json());
// app.use(cors());
// app.use('/api', router);
// app.listen(port, () => {
//     console.log(`Server is running on http://localhost:${port}`);
// });
// index.ts
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const cliente_1 = require("./models/cliente"); // Importe a classe Cliente
const cpf_1 = require("./models/cpf");
const app = (0, express_1.default)();
const port = 3001;
// Middleware
app.use(body_parser_1.default.json());
app.use((0, cors_1.default)());
// Lista dinâmica de clientes inicialmente vazia
let clientes = [];
// Endpoint para cadastrar um novo cliente
app.post('/api/clientes/cadastrar', (req, res) => {
    const { nome, nomeSocial, cpf } = req.body;
    // Verifica se o CPF já está cadastrado
    const clienteExistente = clientes.find((cliente) => cliente.getCpf().getNumero === cpf);
    if (clienteExistente) {
        return res.status(400).json({ error: 'CPF já cadastrado' });
    }
    // Cria um novo objeto Cliente e adiciona à lista
    const novoCliente = new cliente_1.Cliente(nome, nomeSocial, new cpf_1.CPF(cpf));
    clientes.push(novoCliente);
    res.status(201).json({ message: 'Cliente cadastrado com sucesso' });
});
// Endpoint para listar todos os clientes
app.get('/api/clientes', (req, res) => {
    res.json(clientes);
});
// Iniciar o servidor
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
