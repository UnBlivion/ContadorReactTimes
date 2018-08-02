import React, { Component } from 'react';
import './App.css';
import PlacarTime from './PlacarTime';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue1: '',
      inputValue2: '',
      gols1: 0,
      gols2: 0
    }
  }

  incrementar = numero => {
    let novoState = {};
    novoState[`gols${numero}`] = this.state[`gols${numero}`] + 1;
    this.setState(novoState);
  }

  trocarNome1 = (event) => {
    this.setState({
      inputValue1: event.target.value
    })
  }

  trocarNome2 = (event) => {
    this.setState({
      inputValue2: event.target.value
    })
  }

  atualizar = () => {
    this.setState({
      inputValue1: '',
      inputValue2: '',
      gols1: 0,
      gols2: 0
    });
  }

  render() {
    return (
      <div className="body">
        <div className="controles">
          <input numero="1" value={this.state.inputValue1} type="text" onChange={this.trocarNome1} placeholder="Digite o nome do time da casa" />
          <input numero="2" value={this.state.inputValue2} type="text" onChange={this.trocarNome2} placeholder="Digite o nome do time visitante" />
          <button onClick={this.atualizar}>Zerar placar</button>
        </div>
        <div className="placar">
          <PlacarTime numero="1" gols={this.state.gols1} nomeTime={this.state.inputValue1} funcaoBotao={this.incrementar} />
          X
          <PlacarTime numero="2" gols={this.state.gols2} nomeTime={this.state.inputValue2} funcaoBotao={this.incrementar} visitante="true" />
        </div>
      </div>
    );
  }
}

export default App;