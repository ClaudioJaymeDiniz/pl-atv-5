import { Request, Response } from 'express';
import { Cliente } from '../models/cliente';
import { CPF } from '../models/cpf';

let clientes: Cliente[] = [];

export const cadastrarCliente = (req: Request, res: Response) => {
    const { nome, nomeSocial, cpf } = req.body;
    const novoCliente = new Cliente(nome, nomeSocial, new CPF(cpf));
    clientes.push(novoCliente);
    res.status(201).send(novoCliente);
};

export const listarClientes = (req: Request, res: Response) => {
    res.status(200).send(clientes);
};

export const alterarCliente = (req: Request, res: Response) => {
    const { nome, nomeSocial, cpf } = req.body;
    const cliente = clientes.find(c => c.getCpf().getNumero === cpf); // Corrigido para acessar corretamente o CPF
    if (cliente) {
        cliente.nome = nome;
        cliente.nomeSocial = nomeSocial;
        res.status(200).send(cliente);
    } else {
        res.status(404).send({ message: 'Cliente não encontrado' });
    }
};

export const excluirCliente = (req: Request, res: Response) => {
    const { cpf } = req.params;
    clientes = clientes.filter(c => c.getCpf().getNumero !== cpf); // Corrigido para acessar corretamente o CPF
    res.status(200).send({ message: 'Cliente excluído com sucesso' });
};
