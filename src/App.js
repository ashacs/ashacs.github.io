import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Panel from './Components/Panel';
import About from './Components/About';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Panel />
          <Route path="/about" component={ About } />
        </div>
      </Router>
    );
  }
}

export default App;
