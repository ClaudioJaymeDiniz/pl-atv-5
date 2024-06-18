import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

type props = {
    tema: string
};

type state = {
    selectedItem: string | null,
    showModal: boolean
};

export default class ListaServico extends Component<props, state> {
    precos: { [key: string]: number };

    constructor(props: props | Readonly<props>) {
        super(props);
        this.state = {
            selectedItem: null,
            showModal: false
        };
        this.precos = {
            "Produto 1": 100,
            "Produto 2": 200,
            "Produto 3": 300,
            "Produto 4": 400,
            "Produto 5": 500
        };
        this.handleItemClick = this.handleItemClick.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
    }

    handleItemClick(item: string, e: React.MouseEvent) {
        e.preventDefault();
        this.setState({
            selectedItem: item,
            showModal: true
        });
    }

    handleCloseModal() {
        this.setState({ showModal: false });
    }

    handleAlterar() {
        console.log(`Alterar Serviço: ${this.state.selectedItem}`);
        this.handleCloseModal();
    }

    handleExcluir() {
        console.log(`Deletar Serviço: ${this.state.selectedItem}`);
        this.handleCloseModal();
    }

    render() {
        const { tema } = this.props;
        const { selectedItem, showModal } = this.state;
        const preco = selectedItem ? this.precos[selectedItem] : null;

        return (
            <main>
                <div className="list-group">
                    {["Serviço 1", "Serviço 2", "Serviço 3", "Serviço 4", "Serviço 5"].map(servico => (
                        // eslint-disable-next-line jsx-a11y/anchor-is-valid
                        <a
                            href="#"
                            key={servico}
                            className={`list-group-item list-group-item-action list-group-item-primary ${selectedItem === servico ? tema : ""}`}
                            onClick={(e) => this.handleItemClick(servico, e)}
                        >
                            {servico}
                        </a>
                    ))}
                </div>
                {showModal && (
                    <div className="modal show" tabIndex={-1} style={{ display: "block", backgroundColor: "rgba(0, 0, 0, 0.5)" }}>
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title">Detalhes do Produto</h5>
                                    <button type="button" className="btn-close" onClick={this.handleCloseModal}></button>
                                </div>
                                <div className="modal-body">
                                    <p>Nome: {selectedItem}</p>
                                    <p>Preço: {preco}</p>
                                </div>
                                <div className="modal-footer">
                                <button type="button" className="btn" onClick={this.handleAlterar}>Alterar</button>
                                <button type="button" className="btn" onClick={this.handleExcluir}>Excluir</button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
                
            </main>
        );
    }
}
