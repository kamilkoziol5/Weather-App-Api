export function cityAlert() {
	const popup = document.createElement('div');
	popup.classList.add('city-popup');
	popup.innerHTML = `<h3>Wpisz nazwę miasta!</h3>
		<div class="img-wrapper"><img src="images/city.png" alt="" /></div>

	
	`;
	document.body.append(popup);

	requestAnimationFrame(() => {
		popup.classList.add('shown');
	});

	setTimeout(() => {
		popup.classList.remove('shown');
		setTimeout(() => popup.remove(), 300);
	}, 3500);
}
