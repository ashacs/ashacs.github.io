import React, { Component } from 'react';
import './App.css';
import Panel from './Components/Panel';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <div className="App">
        <Panel />
      </div>
    );
  }
}

export default App;
