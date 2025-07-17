export function cityNotFoundAlert(text) {
	const inputCtn = document.querySelector('.input-container');
	const input = document.querySelector('.search-input');

	if (inputCtn.querySelector('.error-message')) return;

	const p = document.createElement('p');
	p.classList.add('error-message');
	p.textContent = `${text}`;

	inputCtn.append(p);
	input.classList.add('error');
	input.value = '';

	setTimeout(() => {
		input.classList.remove('error');
		p.remove();
	}, 3000);
}
