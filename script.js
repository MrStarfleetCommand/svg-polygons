(() => {
	const form = document.querySelector('form');
	const r = 50;
	const limit = 2.9 * Math.PI;

	form.onsubmit = event => {
		event.preventDefault();

		const number = document.querySelector('#number').value;
		const step = Math.PI / number * 2;
		const points = [];
		const h2 = document.createElement('h2');
		const div = document.createElement('div');
		const pre = document.createElement('pre');

		for (let angle = Math.PI / 2; angle < limit; angle += step){
			const x = r * (Math.cos(angle) + 1);
			const y = r * (Math.sin(angle) + 1);
			points.push(x.toFixed(3), y.toFixed(3));
		}

		const svg = `<?xml version="1.0" encoding="utf-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="${r * 2}" height="${r * 2}">
	<path d="M ${points.join(' ')} Z"/>
</svg>`;

		h2.innerHTML = `Sides: ${number}`;
		div.innerHTML = svg;
		pre.textContent = svg;

		form.after(pre);
		form.after(div);
		form.after(h2);
	}
})();
