import React from "react";

class ErrorComponent extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		return( <>
			<div>
			{this.props.doesNotExist}
			</div>
		</>);
	}
}

class Counter extends React.Component {

	constructor(props) {

		console.log("constructor()");

		super(props);

		this.state = {
			counter: 0
		};

		this.increment = () => this.setState({
			counter: this.state.counter + 1
		})

		this.decrement = () => this.setState({
			counter: this.state.counter - 1
		})
	}

	static getDerivedStateFromProps(props, state) {

		console.log("getDerivedStateFromProps()");

		if (props.seed) {
			return {
				counter: props.seed
			};	
		}

		return null;
	}

	componentDidMount() {
		console.log("componentDidMount()");
	}

	componentDidUpdate(prevProps, prevState, snapShot) {
		console.log("componentDidUpdate()");
	}

	componentWillUnmount() {
		console.log("componentWillUnmount()");
	}

	render() {

		console.log("render()");
		// console.log("render() :: state", this.state, " :: props", this.props);

		if (this.state.error) {
			return <>
				<h1> Error </h1>
				{this.state.error}
				{this.state.info}
			</>
		}

		return (<>
			<button onClick={this.increment}> Increment </button>
			<button onClick={this.decrement}> Decrement </button>

			<div className="counter">
				<h1> counter: { this.state.counter } </h1>
			</div>
		</>);
	}

	shouldComponentUpdate(nextProps, nextState) {

		console.log("shouldComponentUpdate()");
		
		// ignore this case
		if (nextProps.random && this.props.random !== nextProps.random) {			
			return false;
		}

		return true;
	}

	componentDidCatch(error, info) {
		console.log("componentDidCatch()");
		this.setState({error, info});
	}
}

export {
	Counter,
	ErrorComponent
};