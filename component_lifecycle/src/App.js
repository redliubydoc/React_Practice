import React from "react";

import {Counter} from "./components/Counter";

class App extends React.Component {

  constructor(props) {

    super(props);

    this.state = {
      mountCounterComponent: true,
      random: Math.random(),
      seed: 0
    };

    this.mountCounterComponent = () => this.setState({mountCounterComponent: true});

    this.unmountCounterComponent = () => this.setState({mountCounterComponent: false});

    this.changeState = () => this.setState({random: Math.random()});

    this.generateSeed = () => this.setState({seed: parseInt(Math.random() * 100)});
  }

  render() {
    
    console.log("--------------------------------------------");
    console.log("render() @ Parent");
    console.log("--------------------------------------------");

    return (<>
      <button onClick={this.mountCounterComponent} disabled={this.state.mountCounterComponent}> Mount Child @ Parent </button>
      <button onClick={this.unmountCounterComponent} disabled={!this.state.mountCounterComponent}> Unmount Child @ Parent </button>
      <button onClick={this.changeState}> Change State @ Parent </button>
      <button onClick={this.generateSeed}> Generate Seed @ Parent </button>
      {/* <button onClick={this.triggerError}> Trigger Error @ Parent </button> */}

      <div id="counter-component-placeholder">{ 
          this.state.mountCounterComponent && <Counter 
          seed={this.state.seed}
        />
      }</div>
    </>);
  }
}

export default App;
