import React, { Component } from "react";
import TaskItem from "./task_item";

export default class TaskList extends Component {
	render() {
		return <ul>
			{[1, 2, 3].map(id => {
				return <TaskItem key={id} id={id} />
			})}
		</ul>;
	}
}
