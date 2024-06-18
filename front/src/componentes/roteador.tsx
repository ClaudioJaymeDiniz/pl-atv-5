import { Component } from "react";
import BarraNavegacao from "./barraNavegacao";
import ListaCliente from "./listaClientes";
import ListaProduto from "./listaProduto";
import ListaServico from "./listaServico";
import ListaPet from "./listaPet";
import Vendas from "./vendas";
import Cadastros from "./cadastros";

type state = {
    tela: string
}

export default class Roteador extends Component<{}, state> {
    constructor(props: {} | Readonly<{}>) {
        super(props)
        this.state = {
            tela: 'Clientes'
        }
        this.selecionarView = this.selecionarView.bind(this)
    }

    selecionarView(novaTela: string, evento: Event) {
        evento.preventDefault()
        console.log(novaTela);
        this.setState({
            tela: novaTela
        })
    }

    render() {
        let barraNavegacao = <BarraNavegacao seletorView={this.selecionarView} tema="#99ccff"
            botoes={['Clientes', 'Cadastros','Vendas',
                'Lista Produtos', 'Lista Serviços', 'Lista Pets']} />;

        if (this.state.tela === 'Clientes') {
            return (
                <>
                    {barraNavegacao}
                    <ListaCliente tema="#e3f2fd" />
                </>
            );
        } else if (this.state.tela === 'Lista Produtos') {
            return (
                <>
                    {barraNavegacao}
                    <ListaProduto tema="#e3f2fd" />
                </>
            );
        } else if (this.state.tela === 'Lista Serviços') {
            return (
                <>
                    {barraNavegacao}
                    <ListaServico tema="#e3f2fd" />
                </>
            );
        } else if (this.state.tela === 'Lista Pets') {
            return (
                <>
                    {barraNavegacao}
                    <ListaPet tema="#e3f2fd" />
                </>
            );
        }else if (this.state.tela === 'Vendas') {
            return (
                <>
                    {barraNavegacao}
                    <Vendas tema="#e3f2fd" />
                </>
            );
        } else {
            return (
                <>
                    {barraNavegacao}
                    <Cadastros  />
                </>
            );
        }
    }
}
