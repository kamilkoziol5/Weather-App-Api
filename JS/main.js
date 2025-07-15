import { renderWeatherApp } from './Render.js';

import { checkWeather } from './AsyncFunction.js';

renderWeatherApp();

const input = document.querySelector('.search-input');
const searchBtn = document.querySelector('.search-btn');
searchBtn.addEventListener('click', checkWeather);
input.addEventListener('keyup', e => {
	if (e.key === 'Enter') checkWeather();
});
