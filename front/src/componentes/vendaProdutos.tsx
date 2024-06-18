import { Component } from "react";

type props = {
    tema: string
}

export default class VendaProtudo extends Component<props> {

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
                    <label htmlFor="">Nome Produto</label>
                    <select name="Produto" id="">
                            <option value="Produto1">Produto 1</option>
                            <option value="Produto2">Produto 2</option>
                            <option value="Produto3">Produto 3</option>
                            <option value="Produto4">Produto 4</option>
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