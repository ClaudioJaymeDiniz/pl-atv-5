/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

type Cliente = {
    nome: string;
    nomeSocial: string;
    cpf: string;
    rgs: { numero: string, dataEmissao: string }[];
    dataCadastro: string;
    telefones: string[];
    produtosConsumidos: string[];
    servicosConsumidos: string[];
    pets: { nome: string, raca: string, genero: string, tipo: string }[];
};

type Props = {
    tema: string;
};

type State = {
    selectedItem: Cliente | null;
    showModal: boolean;
    clientes: Cliente[];
    erro: string | null;
};

export default class ListaCliente extends Component<Props, State> {
    constructor(props: Props | Readonly<Props>) {
        super(props);
        this.state = {
            selectedItem: null,
            showModal: false,
            clientes: [],
            erro: null,
        };
        this.handleItemClick = this.handleItemClick.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
        this.handleAlterar = this.handleAlterar.bind(this);
        this.handleExcluir = this.handleExcluir.bind(this);
    }

    componentDidMount() {
        this.fetchClientes();
    }

    async fetchClientes() {
        try {
            const response = await fetch("http://localhost:3001/api/clientes");
            if (response.ok) {
                const clientes: Cliente[] = await response.json();
                this.setState({ clientes, erro: null });
            } else {
                this.setState({ erro: "Erro ao buscar clientes." });
            }
        } catch (error) {
            console.error("Erro ao buscar clientes:", error);
            this.setState({ erro: "Erro ao buscar clientes." });
        }
    }

    handleItemClick(cliente: Cliente, e: React.MouseEvent) {
        e.preventDefault();
        this.setState({
            selectedItem: cliente,
            showModal: true,
        });
    }

    handleCloseModal() {
        this.setState({ showModal: false });
    }

    handleAlterar() {
        console.log(`Alterar cliente: ${this.state.selectedItem?.nome}`);
        this.handleCloseModal();
    }

    handleExcluir() {
        console.log(`Deletar cliente: ${this.state.selectedItem?.nome}`);
        this.handleCloseModal();
    }

    render() {
        const { tema } = this.props;
        const { selectedItem, showModal, clientes, erro } = this.state;

        if (erro) {
            return (
                <div className="alert alert-danger" role="alert">
                    {erro}
                </div>
            );
        }

        return (
            <main>
                <div className="list-group">
                    {clientes.map((cliente) => (
                        <a
                            href="#"
                            key={cliente.cpf}
                            className={`list-group-item list-group-item-action list-group-item-primary ${
                                selectedItem === cliente ? tema : ""
                            }`}
                            onClick={(e) => this.handleItemClick(cliente, e)}
                        >
                            {cliente.nome}
                        </a>
                    ))}
                </div>
                {showModal && selectedItem && (
                    <div
                        className="modal show"
                        tabIndex={-1}
                        style={{ display: "block", backgroundColor: "rgba(0, 0, 0, 0.5)" }}
                    >
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title">Detalhes do Cliente</h5>
                                    <button type="button" className="btn-close" onClick={this.handleCloseModal}></button>
                                </div>
                                <div className="modal-body">
                                    <p>Nome: {selectedItem.nome || "Vazio"}</p>
                                    <p>Nome Social: {selectedItem.nomeSocial || "Vazio"}</p>
                                    <p>CPF: {selectedItem.cpf || "Vazio"}</p>
                                    <p>Data de Cadastro: {selectedItem.dataCadastro || "Vazio"}</p>
                                    <p>Telefones: {selectedItem.telefones.length > 0 ? selectedItem.telefones.join(", ") : "Vazio"}</p>
                                    <p>Produtos Consumidos: {selectedItem.produtosConsumidos.length > 0 ? selectedItem.produtosConsumidos.join(", ") : "Vazio"}</p>
                                    <p>Serviços Consumidos: {selectedItem.servicosConsumidos.length > 0 ? selectedItem.servicosConsumidos.join(", ") : "Vazio"}</p>
                                    <div>
                                        <h6>RGs:</h6>
                                        {selectedItem.rgs.length > 0 ? (
                                            selectedItem.rgs.map((rg, index) => (
                                                <div key={index}>
                                                    <p>RG: {rg.numero}</p>
                                                    <p>Data de Emissão: {rg.dataEmissao}</p>
                                                </div>
                                            ))
                                        ) : (
                                            <p>Vazio</p>
                                        )}
                                    </div>
                                    <div>
                                        <h6>Pets:</h6>
                                        {selectedItem.pets.length > 0 ? (
                                            selectedItem.pets.map((pet, index) => (
                                                <div key={index}>
                                                    <p>Nome: {pet.nome || "Vazio"}</p>
                                                    <p>Raça: {pet.raca || "Vazio"}</p>
                                                    <p>Gênero: {pet.genero || "Vazio"}</p>
                                                    <p>Tipo: {pet.tipo || "Vazio"}</p>
                                                </div>
                                            ))
                                        ) : (
                                            <p>Vazio</p>
                                        )}
                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" onClick={this.handleAlterar}>
                                        Alterar
                                    </button>
                                    <button type="button" className="btn btn-danger" onClick={this.handleExcluir}>
                                        Excluir
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </main>
        );
    }
}
