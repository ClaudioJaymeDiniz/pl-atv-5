"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const clienteController_1 = require("../controllers/clienteController");
const petController_1 = require("../controllers/petController"); // Importe o novo controlador
const router = express_1.default.Router();
router.post('/clientes/cadastrar', clienteController_1.cadastrarCliente);
router.get('/clientes/listar', clienteController_1.listarClientes);
router.put('/clientes/alterar', clienteController_1.alterarCliente);
router.delete('/clientes/excluir/:cpf', clienteController_1.excluirCliente); // :cpf é um parâmetro dinâmico
router.post('/pets/cadastrar', petController_1.cadastrarPet); // Adicione a nova rota
exports.default = router;
