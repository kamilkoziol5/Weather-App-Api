export function renderWeatherApp() {
	const appContainer = document.querySelector('#app');
	const weatherApp = document.createElement('div');
	weatherApp.classList.add('container');
	weatherApp.innerHTML = `
    <div class="input-container">
				<input
				class="search-input"
					type="text"
					placeholder="Enter city name..."
					autocomplete="off" />
				<button class="search-btn">
					<img src="images/search.png" alt="" />
				</button>
			</div>

    `;

	appContainer.append(weatherApp);
}
