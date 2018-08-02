import React, { Component } from 'react';
import './PlacarTime.css';

class PlacarTime extends Component {
    constructor(props){
        super(props);
        this.texto = "Time da casa";
    }

    anotarGol = () => {
        this.props.funcaoBotao(this.props.numero);
    }

    render() {
        if(this.props.visitante === "true"){
            this.texto = "Time da visita";
        }

        return (
            <div className="placartime">
                <h1>{this.props.nomeTime || this.texto}</h1>
                <h2>{this.props.gols}</h2>
                <button className="gol" onClick={this.anotarGol}>
                    GOL!
                </button>
            </div>
        );
  }
}

export default PlacarTime;