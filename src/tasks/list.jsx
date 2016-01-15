import React, { Component } from "react";
import TaskItem from "./item";

export default class TaskList extends Component {
	constructor(props) {
		super(props);
		this.state = { tasks: props.tasks };
	}

	render() {
		console.log("RENDER LIST", this.state);
		return <ul>
			{this.state.tasks.map((task, i) => {
				return <TaskItem key={i} task={task} />
			})}
		</ul>;
	}
}
