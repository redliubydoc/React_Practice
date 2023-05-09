import React from "react";

import Counter from "./components/Counter";

class App extends React.Component {

  constructor(props) {

    super(props);

    this.state = {
      mountCounter: true,
      random: Math.random(),
      seed: 50
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
  }

  render() {
    return (<>
      <button onClick={this.mountCounter} disabled={this.state.mountCounter}> Mount </button>
      <button onClick={this.unmountCounter} disabled={!this.state.mountCounter}> Unmount </button>
      <button onClick={this.generateRandom}> Generate Random </button>
      <button onClick={this.generateSeed}> Generate Seed </button>

      <div id="counter-placeholder">{ 
        <Counter 
          random={this.state.random}
          seed={this.state.seed}
        />
      }</div>
    </>);
  }
}

export default App;
