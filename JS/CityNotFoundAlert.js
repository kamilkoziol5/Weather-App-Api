export function cityNotFoundAlert() {
	const inputCtn = document.querySelector('.input-container');
	const p = document.createElement('p');
	p.classList.add('error-message');
	p.textContent = 'City not Found!';

	inputCtn.append(p);

	setTimeout(() => {
		p.remove();
	}, 3000);
}
