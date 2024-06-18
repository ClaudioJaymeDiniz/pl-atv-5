import { Component } from "react";
import VendaProtudo from "./vendaProdutos";
import VendaServico from "./vendaServicos";

type props = {
    tema: string
}

export default class Vendas extends Component<props> {

    render() {
        return (
            <div className="container-fluid">
                <div className="container-cadastros">
                <div className="container-produtos">
                    <h2>Produtos</h2>
                    <VendaProtudo tema='#e3f2fd' />
                </div>
                <div className="container-produtos">
                    <h2>Serviços</h2>
                    <VendaServico tema='#e3f2fd' />
                </div>
               
            </div>

            </div>
        )
    }
}