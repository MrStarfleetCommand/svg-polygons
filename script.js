(() => {
	const form = document.querySelector('form');
	const limit = 2.9 * Math.PI;

	form.onsubmit = event => {
		event.preventDefault();

		const sides = document.querySelector('#sides').value;
		const radius = document.querySelector('#radius').value;
		const step = Math.PI / sides * 2;
		const points = [];
		const h2 = document.createElement('h2');
		const div = document.createElement('div');
		const pre = document.createElement('pre');
		let xOffset = 0;
		let yOffest = 0;

		for (let angle = Math.PI / 2; angle < limit; angle += step){
			const xAbsolute = radius * (Math.cos(angle) + 1);
			const yAbsolute = radius * (Math.sin(angle) + 1);
			const xRelative = xAbsolute - xOffset;
			const yRelative = yAbsolute - yOffest;
			xOffset = xAbsolute;
			yOffest = yAbsolute;
			points.push(xRelative.toFixed(3), yRelative.toFixed(3));
		}

		const svg = `<?xml version="1.0" encoding="utf-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="${radius * 2}" height="${radius * 2}">
	<path d="m ${points.join(' ')} z" fill="#ff0000"/>
</svg>`;

		h2.innerHTML = `Sides: ${sides}`;
		div.innerHTML = svg;
		pre.textContent = svg;

		form.after(pre);
		form.after(div);
		form.after(h2);
	}
})();
