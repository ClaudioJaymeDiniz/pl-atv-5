import React, { Component, FormEvent, ChangeEvent } from "react";

type Cliente = {
    cpf: string;
    nome: string;
};

type Props = {
    clientes: Cliente[];
};

type State = {
    clienteCpf: string;
    nomePet: string;
    tipoPet: string;
    racaPet: string;
    generoPet: string;
};

export default class FormularioCadastroPet extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            clienteCpf: "",
            nomePet: "",
            tipoPet: "",
            racaPet: "",
            generoPet: "",
        };
    }

    handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        try {
            const { clienteCpf, nomePet, tipoPet, racaPet, generoPet } = this.state;
            const { clientes } = this.props;

            // Encontrar o cliente pelo CPF selecionado
            const cliente = clientes.find((c) => c.cpf === clienteCpf);
            console.log(clientes);
            console.log(clienteCpf);

            if (!cliente) {
                console.error("Cliente não encontrado front.");
                return;
            }

            const response = await fetch("http://localhost:3001/api/pets/cadastrar", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    clienteCpf,
                    nomePet,
                    tipoPet,
                    racaPet,
                    generoPet,
                }),
            });

            if (response.ok) {
                console.log("Pet cadastrado com sucesso!");
                // Limpar o formulário após o cadastro
                this.setState({
                    clienteCpf: "",
                    nomePet: "",
                    tipoPet: "",
                    racaPet: "",
                    generoPet: "",
                });
            } else {
                console.error("Falha ao cadastrar pet.");
            }
        } catch (error) {
            console.error("Erro ao enviar requisição:", error);
        }
    };

    handleChange = (event: ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
        const { name, value } = event.target;
        console.log(name, value);
        this.setState({
            [name]: value,
        } as Pick<State, keyof State>);
    };

    render() {
        const { clientes } = this.props;
        const { clienteCpf, nomePet, tipoPet, racaPet, generoPet } = this.state;

        return (
            <div className="container-fluid">
                <form className="formulario" onSubmit={this.handleSubmit}>
                    <div className="group-input">
                        <label htmlFor="clienteCpf">Selecione o Cliente</label>
                        <select
                            id="clienteCpf"
                            name="clienteCpf"
                            value={clienteCpf}
                            onChange={this.handleChange}
                            className="form-control"
                            required
                        >
                            <option value="">Selecione um cliente</option>
                            {clientes.map((cliente) => (
                                <option key={cliente.cpf} value={cliente.cpf}>
                                    {cliente.nome}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="group-input">
                        <label htmlFor="nomePet">Nome do Pet</label>
                        <input
                            type="text"
                            className="form-control"
                            id="nomePet"
                            name="nomePet"
                            value={nomePet}
                            onChange={this.handleChange}
                            placeholder="Nome do Pet"
                            required
                        />
                    </div>
                    <div className="group-input">
                        <label htmlFor="tipoPet">Tipo do Pet</label>
                        <input
                            type="text"
                            className="form-control"
                            id="tipoPet"
                            name="tipoPet"
                            value={tipoPet}
                            onChange={this.handleChange}
                            placeholder="Tipo do Pet"
                            required
                        />
                    </div>
                    <div className="group-input">
                        <label htmlFor="racaPet">Raça do Pet</label>
                        <input
                            type="text"
                            className="form-control"
                            id="racaPet"
                            name="racaPet"
                            value={racaPet}
                            onChange={this.handleChange}
                            placeholder="Raça do Pet"
                            required
                        />
                    </div>
                    <div className="group-input">
                        <label htmlFor="generoPet">Gênero do Pet</label>
                        <input
                            type="text"
                            className="form-control"
                            id="generoPet"
                            name="generoPet"
                            value={generoPet}
                            onChange={this.handleChange}
                            placeholder="Gênero do Pet"
                            required
                        />
                    </div>
                    <div className="group-input">
                        <button className="btn btn-outline-secondary" type="submit">
                            Cadastrar
                        </button>
                    </div>
                </form>
            </div>
        );
    }
}
