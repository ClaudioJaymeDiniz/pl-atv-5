// import express from 'express';
// import bodyParser from 'body-parser';
// import cors from 'cors';
// import router from './routes/router';

// const app = express();
// const port = 3001;

// app.use(bodyParser.json());
// app.use(cors());
// app.use('/api', router);


// app.listen(port, () => {
//     console.log(`Server is running on http://localhost:${port}`);
// });

// index.ts
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { Cliente } from './models/cliente'; // Importe a classe Cliente
import { CPF } from './models/cpf';

const app = express();
const port = 3001;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Lista dinâmica de clientes inicialmente vazia
let clientes: Cliente[] = [];

// Endpoint para cadastrar um novo cliente
app.post('/api/clientes/cadastrar', (req, res) => {
    const { nome, nomeSocial, cpf } = req.body;

    // Verifica se o CPF já está cadastrado
    const clienteExistente = clientes.find((cliente) => cliente.getCpf().getNumero === cpf);
    if (clienteExistente) {
        return res.status(400).json({ error: 'CPF já cadastrado' });
    }

    // Cria um novo objeto Cliente e adiciona à lista
    const novoCliente = new Cliente(nome, nomeSocial, new CPF(cpf));
    clientes.push(novoCliente);
    res.status(201).json({ message: 'Cliente cadastrado com sucesso' });
});

// Endpoint para listar todos os clientes
app.get('/api/clientes/', (req, res) => {
    res.json(clientes);
});

// Iniciar o servidor
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
