import { Component } from "react";

type props = {
    tema: string
}

export default class FormularioCadastroServico extends Component<props> {

    render() {
        let tema = this.props.tema
        return (
            <div className="container-fluid">
                <form>
                    <div className="group-input">
                        <label htmlFor="">Nome do Serviço</label>
                        <input type="text" className="form-control" placeholder="Nome" aria-label="Nome" aria-describedby="basic-addon1" />
                    </div>
                    <div className="group-input">
                        <label htmlFor="">Preço</label>
                        <input type="text" className="form-control" placeholder="0,0" aria-label="Preco" aria-describedby="basic-addon1" />
                    </div>
                    <div className="group-input">
                        <button className="btn btn-outline-secondary" type="button" style={{ background: tema }}>Cadastrar</button>
                    </div>
                </form>
            </div>
        )
    }
}