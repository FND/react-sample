/*eslint-env browser */

import { createElement } from "react";
import { render } from "react-dom";
import TaskList from "./src/task_list";

renderComponent("TaskList", TaskList);

function renderComponent(tag, component) {
	let nodes = document.querySelectorAll(tag);
	[].forEach.call(nodes, node => render(createElement(component), node));
}
