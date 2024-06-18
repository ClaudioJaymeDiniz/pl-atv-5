import { Component } from "react";

type props = {
    tema: string
}

export default class VendaServico extends Component<props> {

    render() {
        let tema = this.props.tema
        return (
            <div className="container-fluid">
                <form>
                    <div className="group-input">
                    <label htmlFor="">Nome do Cliente</label>
                        <select name="Nome" id="">
                            <option value="Cliente1">Cliente 1</option>
                            <option value="Cliente2">Cliente 2</option>
                            <option value="Cliente3">Cliente 3</option>
                            <option value="Cliente4">Cliente 4</option>
                        </select>
                    </div>
                    <div className="group-input">
                    <label htmlFor="">Nome do Serviço</label>
                    <select name="Servico" id="">
                            <option value="Servico1">Serviço 1</option>
                            <option value="Servico2">Serviço 2</option>
                            <option value="Servico3">Serviço 3</option>
                            <option value="Servico4">Serviço 4</option>
                        </select>
                    </div>
                    <div className="group-input">
                        <label htmlFor="">Quantidade</label>
                        <input type="text" className="form-control qtd" placeholder="0" aria-label="Tipo" aria-describedby="basic-addon1" />
                    </div>
                    <div className="group-input">
                        <button className="btn btn-outline-secondary" type="button" style={{ background: tema }}>Cadastrar</button>
                    </div>
                </form>
            </div>
        )
    }
}