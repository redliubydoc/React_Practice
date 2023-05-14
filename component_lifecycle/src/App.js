import React from "react";

// class Error extends React.Component {
	
// 	constructor(props) {
// 		super(props);
// 	}

// 	render() {
// 		return (<>
// 			{/* cause of error */}
// 			{doesNotExist}

// 			<div>
// 				<h1> Error! </h1>
// 			</div>
// 		</>);
// 	}
// }

class Counter extends React.Component {

	// called only during mounting
	constructor(props) {

		console.log("\tconstructor() @ Child");

		super(props);

		this.state = {
			counter: 0,
			seed: 0,
			random: Math.random()
		};

		this.increment = () => this.setState({counter: this.state.counter + 1});

		this.decrement = () => this.setState({counter: this.state.counter - 1});
	
		this.changeRandom = () => this.setState({random: Math.random()});
	}

	// called before calling shouldComponentUpdate() and render()
	static getDerivedStateFromProps(props, state) {
		
		console.log("\tgetDerivedStateFromProps() @ Child");

		if (props.seed && state.seed !== props.seed) {
			return {
				seed: props.seed
			};
		}

		return null;
	}

	// called before calling render except the very first render
	shouldComponentUpdate(nextProps, nextState) {
		if (this.state.random !== nextState.random) {
			console.log("\tshouldComponentUpdate() @ Child :: NO");
			return false;
		}
		console.log("\tshouldComponentUpdate() @ Child :: YES");
		return true;
	}

	// invoked right before the most recently rendered output is committed except the very first one
	getSnapshotBeforeUpdate(prevProps, prevState) {
		console.log("\tgetSnapshotBeforeUpdate() @ Child :: prevProps", prevProps, "prevState", prevState);
		return null;
	}
	
	render() {

		console.log("\trender() @ Child");
		// console.log("\trender() @ Child :: state", this.state, "props", this.props);
		console.log("\t--------------------------------------------");


		return (<>
			<button onClick={this.decrement}> Decrement @ Child </button>
			<button onClick={this.increment}> Increment @ Child </button>
			<button onClick={this.changeRandom}> Change Random @ Child </button>
			{/* <button onClick={this.triggerError}> Trigger Error @ Child </button> */}

			<div className="counter">
				<h1> counter: { this.state.seed + this.state.counter } </h1>
			</div>
			{/* <div id="error-component-placeholder">
				<Error/>
			</div> */}
		</>);
	}

	// called after very first render
	componentDidMount() {
		console.log("\tcomponentDidMount() @ Child");
	}

	// called after every render except the very first one
	componentDidUpdate(prevProps, prevState, snapShot) {
		console.log("\tcomponentDidUpdate() @ Child");
	}

	componentWillUnmount() {
		console.log("\tcomponentWillUnmount() @ Child");
	}

	// componentDidCatch(error, info) {
	// 	console.log("\tcomponentDidCatch() @ Child :: error", error, "info", info);
	// }
}

export {Counter};
