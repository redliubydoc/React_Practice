import React from "react";

import {Counter} from "./components/Counter";
import {ErrorComponent} from "./components/Counter";

class App extends React.Component {

  constructor(props) {

    super(props);

    this.state = {
      mountCounter: true,
      random: Math.random(),
      seed: 50,
      showErrorComponent: false
    };

    this.mountCounter = () => this.setState({
      mountCounter: true
    });

    this.unmountCounter = () => this.setState({
      mountCounter: false
    });

    this.generateRandom = () => this.setState({
      random: Math.random()
    });

    this.generateSeed = () => this.setState({
      seed: parseInt(Math.random() * 100)
    });

    this.toggleError = () => this.setState({
      showErrorComponent: !this.state.showErrorComponent
    });
  }

  render() {
    return (<>
      <button onClick={this.mountCounter} disabled={this.state.mountCounter}> Mount </button>
      <button onClick={this.unmountCounter} disabled={!this.state.mountCounter}> Unmount </button>
      <button onClick={this.generateRandom}> Generate Random </button>
      <button onClick={this.generateSeed}> Generate Seed </button>
      <button onClick={this.toggleError}> Toggle Error </button>

      <div id="counter-placeholder">{ 
          this.state.mountCounter && <Counter 
          random={this.state.random}
          seed={this.state.seed}
        />
      }</div>
      <div className="error-placeholder">{
        this.state.showErrorComponent && <ErrorComponent/>
      }</div>
    </>);
  }
}

export default App;