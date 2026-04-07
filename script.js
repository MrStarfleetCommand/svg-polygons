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
		let x = 0;
		let y = 0;

		for (let angle = Math.PI / 2; angle < limit; angle += step){
			x += radius * (Math.cos(angle) + 1);
			y += radius * (Math.sin(angle) + 1);
			points.push(x.toFixed(3), y.toFixed(3));
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
