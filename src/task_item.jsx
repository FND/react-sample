import React, { Component } from "react";

export default class TaskItem extends Component {
	render() {
		return <li>#{this.props.id}</li>;
	}
}
