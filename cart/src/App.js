import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <button
          className="snipcart-add-item waves-effect waves-light btn "
          data-item-id="2"
          data-item-name="Bacon"
          data-item-price="3.00"
          data-item-weight="20"
          data-item-url="https://luismasg.github.io/snipcarttest/"
          data-item-description="Some fresh bacon"
        >
          Buy bacon
        </button>
        <button
          className="snipcart-add-item waves-effect waves-light btn"
          data-item-id="1"
          data-item-name="Cheetos"
          data-item-price="4.00"
          data-item-weight="10"
          data-item-url="https://luismasg.github.io/snipcarttest/"
          data-item-description="Get some good cheetos"
        >
          cheetos
        </button>

        <button
          className="snipcart-add-item waves-effect waves-light btn"
          data-item-id="3"
          data-item-name="lettuce"
          data-item-price="6.00"
          data-item-weight="5"
          data-item-url="https://luismasg.github.io/snipcarttest/"
          data-item-description="start healthy"
        >
          spanish lettuce
        </button>
      </div>
    );
  }
}

export default App;
