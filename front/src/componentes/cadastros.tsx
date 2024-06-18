import React, { Component } from "react";
import FormularioCadastroProduto from "./formularioCadastroProduto";
import FormularioCadastroServico from "./formularioCadastroServico";
import FormularioCadastroPet from "./formularioCadastroPet";
import FormularioCadastroCliente from "./formularioCadastroCliente";

type Cliente = {
    cpf: string;
    nome: string;
};

type State = {
    clientes: Cliente[];
};

export default class Cadastros extends Component<{}, State> {
    constructor(props: {}) {
        super(props);
        this.state = {
            clientes: [],
        };
    }

    componentDidMount() {
        this.fetchClientes();
    }

    fetchClientes = async () => {
        try {
            const response = await fetch('http://localhost:3001/api/clientes');
            if (response.ok) {
                const data = await response.json();
                this.setState({ clientes: data });
            } else {
                console.error('Falha ao buscar clientes.');
            }
        } catch (error) {
            console.error('Erro ao buscar clientes:', error);
        }
    };

    handleClienteCadastrado = () => {
        this.fetchClientes();
    };

    render() {
        const { clientes } = this.state;

        return (
            <div className="container-fluid">
                <div className="container-cadastros">
                    <div className="container-produtos">
                        <h2>Clientes</h2>
                        <FormularioCadastroCliente tema='#e3f2fd' onClienteCadastrado={this.handleClienteCadastrado} />
                    </div>
                    <div className="container-produtos">
                        <h2>Pets</h2>
                        {/* Passando a lista de clientes para FormularioCadastroPet */}
                        <FormularioCadastroPet clientes={clientes} />
                    </div>
                    <div className="container-produtos">
                        <h2>Produtos</h2>
                        <FormularioCadastroProduto tema='#e3f2fd' />
                    </div>
                    <div className="container-produtos">
                        <h2>Serviços</h2>
                        <FormularioCadastroServico tema='#e3f2fd' />
                    </div>
                </div>
            </div>
        );
    }
}
