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
	}, {
		label: "...",
		owner: "..."
	}]
};

let components = {
	index: {}, // top-level component instances by tag
	update(components) {
		Object.keys(this.index).forEach(tag => {
			this.index[tag].forEach(instance => {
				instance.updateState(STORE);
			});
		});
	},
	render(tag, component) {
		let nodes = document.querySelectorAll(tag);
		nodes = [].slice.call(nodes)

		this.index[tag] = nodes.map(node => {
			let el = createElement(component, { config: CONFIG, store: STORE });
			return render(el, node);
		});
	}
};

components.render("TaskApp", TaskApp);

setInterval(() => {
	if(STORE.tasks.length === 2) {
		return;
	}

	STORE.tasks.pop(0);
	components.update();
}, 2000);
