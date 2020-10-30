import React, { Component } from "react";
import Frame from "./Frame";
import Result from "./Result";

class App extends Component {
  state = {
    result: ''
  }

  klickButton = klickName => {
    if (klickName === '=') {
      this.calculate()
    } 
    else if (klickName === 'C'){
      this.reset()
    }
    else {
    this.setState({
      result: this.state.result + klickName
    })};
  };

  calculate = () => {
    this.setState ({
      result: eval(this.state.result)
    })
  }

  reset = () => {
    this.setState ({
      result: ''
    })
  }

  render() {
    return (
      <>
        <Result result={this.state.result} />
        <Frame klickButton={this.klickButton} />
      </>
    );
  }
}

export default App;
