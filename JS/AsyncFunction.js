import { cityAlert } from './CityAlert.js';
import { cityNotFoundAlert } from './CityNotFoundAlert.js';
import { renderInfo } from './renderInfo.js';

export async function checkWeather() {
	renderInfo();
	const input = document.querySelector('.search-input');
	const wrapper = document.querySelector('.wrapper');
	const windSpeed = document.querySelector('.wind-speed-value');
	const humidity = document.querySelector('.humidity-value');
	const cityName = document.querySelector('.city-name');
	const temperature = document.querySelector('.temperature');
	const errorMsg = document.querySelector('.error-message');
	const weatherImage = document.querySelector('.weather-image');
	const windDeg = document.querySelector('.wind-deg-value');
	const pressure = document.querySelector('.pressure-value');

	const city = input.value.trim();

	if (!city) {
		cityAlert();
		return;
	}

	const apiKey = 'd472a1b8bd9e16c764e5604b5979111c';
	const apiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${apiKey}`;

	try {
		const response = await fetch(apiUrl);

		if (!response.ok) {
			cityNotFoundAlert();
			input.classList.add('error');
			setTimeout(() => input.classList.remove('error'), 3000);
			input.value = '';
			return;
		}

		const data = await response.json();

		console.log(data);

		windSpeed.textContent = data.wind.speed + ' m/s';
		humidity.textContent = data.main.humidity + ' %';
		pressure.textContent = data.main.pressure + ' hPa';
		windDeg.textContent = data.wind.deg + '°';
		cityName.textContent = data.name;
		temperature.textContent = Math.round(data.main.temp) + '°C';

		switch (data.weather[0].main) {
			case 'Clouds':
				weatherImage.src = 'images/clouds.svg';
				break;
			case 'Clear':
				weatherImage.src = 'images/clear.svg';
				break;
			case 'Rain':
				weatherImage.src = 'images/rain.svg';
				break;
			case 'Drizzle':
				weatherImage.src = 'images/drizzle.svg';
				break;
			case 'Mist':
				weatherImage.src = 'images/mist.svg';
				break;
			default:
				weatherImage.src = 'images/default.svg';
		}

		input.value = '';
		wrapper.classList.add('open');

		if (errorMsg) {
			errorMsg.classList.remove('shown');
		}

		input.classList.remove('error');
	} catch (error) {
		console.error('Błąd wczytywania danych:', error);
		alert('Wystąpił błąd sieci. Spróbuj ponownie później.');
	}
}
