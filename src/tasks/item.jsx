import React, { Component } from "react";

export default class TaskItem extends Component {
	constructor(props) {
		super(props);
		this.state = { task: props.task };
	}

	render() {
		let task = this.state.task;
		return <li>
			{task.label} &#8203;
			<small>{task.owner}</small>
		</li>;
	}
}
