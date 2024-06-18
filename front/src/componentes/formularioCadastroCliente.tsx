import React, { Component, FormEvent, ChangeEvent } from "react";

type Props = {
    tema: string;
    onClienteCadastrado: () => void; // Função para notificar o pai que um cliente foi cadastrado
};

type State = {
    nome: string;
    nomeSocial: string;
    cpf: string;
    dataEmissaoCPF: string;
    rg: string;
    dataEmissaoRG: string;
    telefone: string;
    celular: string;
};

export default class FormularioCadastroCliente extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            nome: "",
            nomeSocial: "",
            cpf: "",
            dataEmissaoCPF: "",
            rg: "",
            dataEmissaoRG: "",
            telefone: "",
            celular: "",
        };
    }

    handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        try {
            const response = await fetch('http://localhost:3001/api/clientes/cadastrar', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(this.state),
            });

            if (response.ok) {
                console.log('Cliente cadastrado com sucesso!');
                console.log('Dados do cliente armazenados:', this.state);
                this.props.onClienteCadastrado(); // Notifica o pai que um cliente foi cadastrado
                this.setState({
                    nome: "",
                    nomeSocial: "",
                    cpf: "",
                    dataEmissaoCPF: "",
                    rg: "",
                    dataEmissaoRG: "",
                    telefone: "",
                    celular: "",
                });
            } else {
                console.error('Falha ao cadastrar cliente.');
            }
        } catch (error) {
            console.error('Erro ao enviar requisição:', error);
        }
    };

    handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        this.setState({
            [name]: value,
        } as Pick<State, keyof State>);
    };

    render() {
        const { tema } = this.props;
        const { nome, nomeSocial, cpf, dataEmissaoCPF, rg, dataEmissaoRG, telefone, celular } = this.state;

        return (
            <div className="container-fluid">
                <form className="formulario" onSubmit={this.handleSubmit}>
                    <div className="group-input">
                        <label htmlFor="nome">Nome</label>
                        <input
                            type="text"
                            className="form-control"
                            id="nome"
                            name="nome"
                            value={nome}
                            onChange={this.handleChange}
                            placeholder="Nome"
                            aria-label="Nome"
                            aria-describedby="basic-addon1"
                        />
                    </div>
                    <div className="group-input">
                        <label htmlFor="nomeSocial">Nome Social</label>
                        <input
                            type="text"
                            className="form-control"
                            id="nomeSocial"
                            name="nomeSocial"
                            value={nomeSocial}
                            onChange={this.handleChange}
                            placeholder="Nome social"
                            aria-label="Nome social"
                            aria-describedby="basic-addon1"
                        />
                    </div>
                    <div className="agrupamento">
                        <div className="group-input junto">
                            <label htmlFor="cpf">CPF</label>
                            <input
                                type="text"
                                className="form-control"
                                id="cpf"
                                name="cpf"
                                value={cpf}
                                onChange={this.handleChange}
                                placeholder="CPF"
                                aria-label="CPF"
                                aria-describedby="basic-addon1"
                            />
                        </div>
                        <div className="group-input junto">
                            <label htmlFor="dataEmissaoCPF">Data de Emissão CPF</label>
                            <input
                                type="text"
                                className="form-control"
                                id="dataEmissaoCPF"
                                name="dataEmissaoCPF"
                                value={dataEmissaoCPF}
                                onChange={this.handleChange}
                                placeholder="DD/MM/AAAA"
                                aria-label="Data Emissao CPF"
                                aria-describedby="basic-addon1"
                            />
                        </div>
                    </div>
                    <div className="agrupamento">
                        <div className="group-input junto">
                            <label htmlFor="rg">RG</label>
                            <input
                                type="text"
                                className="form-control"
                                id="rg"
                                name="rg"
                                value={rg}
                                onChange={this.handleChange}
                                placeholder="RG"
                                aria-label="RG"
                                aria-describedby="basic-addon1"
                            />
                        </div>
                        <div className="group-input junto">
                            <label htmlFor="dataEmissaoRG">Data de Emissão RG</label>
                            <input
                                type="text"
                                className="form-control"
                                id="dataEmissaoRG"
                                name="dataEmissaoRG"
                                value={dataEmissaoRG}
                                onChange={this.handleChange}
                                placeholder="DD/MM/AAAA"
                                aria-label="Data Emissao RG"
                                aria-describedby="basic-addon1"
                            />
                        </div>
                    </div>
                    <div className="agrupamento">
                        <div className="group-input junto">
                            <label htmlFor="telefone">Telefone</label>
                            <input
                                type="text"
                                className="form-control"
                                id="telefone"
                                name="telefone"
                                value={telefone}
                                onChange={this.handleChange}
                                placeholder="Telefone"
                                aria-label="Telefone"
                                aria-describedby="basic-addon1"
                            />
                        </div>
                        <div className="group-input junto">
                            <label htmlFor="celular">Celular</label>
                            <input
                                type="text"
                                className="form-control"
                                id="celular"
                                name="celular"
                                value={celular}
                                onChange={this.handleChange}
                                placeholder="Celular"
                                aria-label="Celular"
                                aria-describedby="basic-addon1"
                            />
                        </div>
                    </div>
                    <div className="group-input">
                        <button className="btn btn-outline-secondary" type="submit" style={{ background: tema }}>
                            Cadastrar
                        </button>
                    </div>
                </form>
            </div>
        );
    }
}
