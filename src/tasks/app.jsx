import React, { Component } from "react";
import TaskList from "./list";

export default class TaskApp extends Component {
	constructor(props) {
		super(props);
		this.state = { tasks: props.store.tasks };
	}

	render() {
		return <TaskList tasks={this.state.tasks} />
	}

	updateState(store) {
		this.setState({ tasks: store.tasks });
	}
}
