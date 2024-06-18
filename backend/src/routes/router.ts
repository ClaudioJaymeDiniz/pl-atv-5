import express from 'express';
import { cadastrarCliente, listarClientes, alterarCliente, excluirCliente } from '../controllers/clienteController';
import { cadastrarPet } from '../controllers/petController'; // Importe o novo controlador

const router = express.Router();

router.post('/clientes/cadastrar', cadastrarCliente);
router.get('/clientes/listar', listarClientes);
router.put('/clientes/alterar', alterarCliente);
router.delete('/clientes/excluir/:cpf', excluirCliente); // :cpf é um parâmetro dinâmico

router.post('/pets/cadastrar', cadastrarPet); // Adicione a nova rota

export default router;
