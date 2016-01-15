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

let state = { config: CONFIG, store: STORE };
let components = {
	index: { // component by tag
		TaskApp: TaskApp
	},
	update() {
		Object.keys(this.index).forEach(tag => {
			this.render(tag, this.index[tag]);
		});
	},
	render(tag, component) {
		let nodes = document.querySelectorAll(tag);
		nodes = [].slice.call(nodes)
		nodes.forEach(node => {
			let el = createElement(component, state);
			return render(el, node);
		});

		this.index[tag] = component;
	}
};

components.update();
setInterval(() => {
	console.log("====");
	STORE.tasks.pop(0);

	components.update();
	console.log("----");
}, 2000);
