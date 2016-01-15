/*eslint-env browser */

import { createElement } from "react";
import { render } from "react-dom";
import TaskApp from "./src/tasks/app";

const CONFIG = {};
const STORE = {
	tasks: [{
		label: "lorem ipsum",
		owner: "John Doe"
	}, {
		label: "dolor sit amet",
		owner: "Jane Doe"
	}]
};

let COMP;
setInterval(() => {
	console.log("====");
	STORE.tasks.pop(0);
	COMP.setState(STORE);
	console.log("----");
}, 2000);

let state = { config: CONFIG, store: STORE };
renderComponent("TaskApp", TaskApp);

function renderComponent(tag, component) {
	let nodes = document.querySelectorAll(tag);
	[].forEach.call(nodes, node => {
		let el = createElement(component, state);
		COMP = render(el, node);
		console.log(COMP);
	});
}
