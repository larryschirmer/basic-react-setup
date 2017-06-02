'use strict';
import React from 'react';
import ReactDOM from 'react-dom';

class Toggle extends React.Component {
	constructor(props) {
		super(props);
		this.state = { isToggleOn: true };

		// This binding is necessary to make `this` work in the callback
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		this.setState(prevState => ({
			isToggleOn: !prevState.isToggleOn,
		}));
	}

	render() {
		return (
			<button onClick={this.handleClick}>
				{this.state.isToggleOn ? 'ON' : 'OFF'}
			</button>
		);
	}
}

const element = (
	<div>
		<h1 id="heading">Hello, World!</h1>
		<h2>It is {new Date().toLocaleTimeString()}.</h2>
	</div>
);

function tick() {
	const element = (
		<div>
			<h1 id="heading">Hello, World!</h1>
			<h2>It is {new Date().toLocaleTimeString()}.</h2>
		</div>
	);
	ReactDOM.render(
		<div>
			<Toggle />
			{element}
		</div>,
		document.getElementById('root')
	);
}

setInterval(tick, 1000);

let update = _ => {
	ReactDOM.render(
		<div>
			<Toggle />
			{element}
		</div>,
		document.getElementById('root')
	);
};
update();

module.exports = {
	Toggle,
	element,
};
