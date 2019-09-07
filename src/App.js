import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.scss";
import Panel from "./Components/Panel";
import About from "./Components/About";
import Career from "./Components/Career";
import Interests from "./Components/Interests";
import Home from "./Components/Home";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <div className="App">
          <Panel />
          <Route path="/" exact={true} component={Home} />
          <Route path="/about" component={About} />
          <Route path="/career" component={Career} />
          <Route path="/interests" component={Interests} />
        </div>
      </Router>
    );
  }
}

export default App;
