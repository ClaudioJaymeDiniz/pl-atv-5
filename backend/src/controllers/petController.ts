import { Request, Response } from 'express';
import { Pet } from '../models/pet'; // Verifique o caminho correto conforme a estrutura do seu projeto
import { Cliente } from '../models/cliente'; // Verifique o caminho correto conforme a estrutura do seu projeto
import { CPF } from '../models/cpf';

// Exemplo de lista de clientes para simular um banco de dados
const clientes: Cliente[] = [
    new Cliente('Cliente 1', 'Nome Social 1', new CPF('12345678900')),
    // Adicione mais clientes conforme necessário
];

export const cadastrarPet = (req: Request, res: Response) => {
    const { clienteCpf, nomePet, tipoPet, racaPet, generoPet } = req.body;

    const cliente = clientes.find(c => c.getCpf().getNumero === clienteCpf); // Correção aqui

    if (cliente) {
        const pet = new Pet(nomePet, racaPet, generoPet, tipoPet);
        cliente.addPet(pet);

        res.status(201).json({ message: 'Pet cadastrado com sucesso!' });
    } else {
        res.status(404).json({ message: 'Cliente não encontrado.' });
    }
};
