import React, { Component } from 'react';
import Table from '../containers/Table';
import SelectorModal from '../containers/SelectorModal';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Table />
        <SelectorModal />
      </div>
    );
  }
}

export default App;
