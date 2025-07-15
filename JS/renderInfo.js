export function renderInfo() {
	const weatherApp = document.querySelector('.container');
	if (weatherApp.querySelector('.wrapper')) return;

	const wrapper = document.createElement('div');
	wrapper.classList.add('wrapper');
	wrapper.innerHTML = `
    		
			<img class="weather-image" src="images/clear.png" alt="" />
			<h2 class="temperature"></h2>
			<h3 class="city-name"></h3>
			<div class="info-container-wrapper">
			<div class="info-container">
				<div class="col">
					<svg  class="animated-icon"   xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 64 64">
	<defs>
		<linearGradient id="a" x1="16.5" y1="19.67" x2="21.5" y2="28.33" gradientUnits="userSpaceOnUse">
			<stop offset="0" stop-color="#fbbf24"/>
			<stop offset="0.45" stop-color="#fbbf24"/>
			<stop offset="1" stop-color="#f59e0b"/>
		</linearGradient>
		<linearGradient id="b" x1="22.56" y1="21.96" x2="39.2" y2="50.8" gradientUnits="userSpaceOnUse">
			<stop offset="0" stop-color="#f3f7fe"/>
			<stop offset="0.45" stop-color="#f3f7fe"/>
			<stop offset="1" stop-color="#deeafb"/>
		</linearGradient>
		<linearGradient id="c" x1="27.5" y1="50.21" x2="36.5" y2="65.79" gradientUnits="userSpaceOnUse">
			<stop offset="0" stop-color="#d4d7dd"/>
			<stop offset="0.45" stop-color="#d4d7dd"/>
			<stop offset="1" stop-color="#bec1c6"/>
		</linearGradient>
		<linearGradient id="d" y1="44.21" y2="59.79" xlink:href="#c"/>
	</defs>
	<circle cx="19" cy="24" r="5" stroke="#f8af18" stroke-miterlimit="10" stroke-width="0.5" fill="url(#a)"/>
	<path d="M19,15.67V12.5m0,23V32.33m5.89-14.22,2.24-2.24M10.87,32.13l2.24-2.24m0-11.78-2.24-2.24M27.13,32.13l-2.24-2.24M7.5,24h3.17M30.5,24H27.33" fill="none" stroke="#fbbf24" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2">
		<animateTransform attributeName="transform" type="rotate" values="0 19 24; 360 19 24" dur="45s" repeatCount="indefinite"/>
	</path>
	<path d="M46.5,31.5l-.32,0a10.49,10.49,0,0,0-19.11-8,7,7,0,0,0-10.57,6,7.21,7.21,0,0,0,.1,1.14A7.5,7.5,0,0,0,18,45.5a4.19,4.19,0,0,0,.5,0v0h28a7,7,0,0,0,0-14Z" stroke="#e6effc" stroke-miterlimit="10" stroke-width="0.5" fill="url(#b)"/>
<line x1="17" y1="58" x2="47" y2="58"
	fill="none"
	stroke-linecap="round"
	stroke-miterlimit="10"
	stroke-width="3"
	stroke="#F59E0B">
	<animateTransform attributeName="transform" type="translate" values="-4 0; 4 0; -4 0" dur="5s" begin="0s" repeatCount="indefinite"/>
</line>

<line x1="17" y1="52" x2="47" y2="52"
	fill="none"
	stroke-linecap="round"
	stroke-miterlimit="10"
	stroke-width="3"
	stroke="#ffffffff">
	<animateTransform attributeName="transform" type="translate" values="-4 0; 4 0; -4 0" dur="5s" begin="-4s" repeatCount="indefinite"/>
</line>

</svg>

					<div class="col-column">
						<span class="col-column-info-value humidity-value"></span>
						<span class="col-column-info-name">Humidity</span>
					</div>
				</div>
				<div class="col">
			<svg class="animated-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
	<path d="M43.64,20a5,5,0,1,1,3.61,8.46H11.75"
		fill="none"
		stroke-dasharray="35 22"
		stroke-linecap="round"
		stroke-miterlimit="10"
		stroke-width="3"
		stroke="#F59E0B">
		<animate attributeName="stroke-dashoffset" values="-57; 57" dur="2s" repeatCount="indefinite"/>
	</path>
	<path d="M29.14,44a5,5,0,1,0,3.61-8.46h-21"
		fill="none"
		stroke-dasharray="24 15"
		stroke-linecap="round"
		stroke-miterlimit="10"
		stroke-width="3"
		stroke="#ffffffff">
		<animate attributeName="stroke-dashoffset" values="-39; 39" dur="2s" begin="-1.5s" repeatCount="indefinite"/>
	</path>
</svg>


					<div class="col-column">
						<span class="col-column-info-value wind-speed-value"></span>

						<span class="col-column-info-name">Wind Speed</span>
					</div>
				</div></div>
					<div class="info-container">
				<div class="col">
<svg class="animated-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
	<circle cx="32" cy="32" r="18" stroke="none" stroke-miterlimit="10" stroke-width="2" fill="#ffffff"/>
	
	<path d="M32,25V19M45.5,32h-6M25,32H19m22.5-8.5-3,3m-13,0-3-3m16,14,3,3m-19,0,3-3" 
		fill="none" stroke="#ffc664ff" stroke-linecap="round" stroke-linejoin="round"/>
	
	<circle cx="32" cy="32" r="3" fill="#F59E0B"/>
	
	<line x1="32" y1="35.5" x2="32" y2="20.5" 
		fill="none" stroke="#F59E0B" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2">
		<animateTransform attributeName="transform" dur="9s" values="30 32 32; 55 32 32; 45 32 32; 55 32 32; 30 32 32" repeatCount="indefinite" type="rotate"/>
	</line>
</svg>


					<div class="col-column ">
						<span class="col-column-info-value pressure-value"></span>
						<span class="col-column-info-name">Pressure</span>
					</div>
				</div>
				<div class="col">
					<svg class="animated-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
	<line x1="18.5" y1="47" x2="18.5" y2="17"
		fill="none"
		stroke-linecap="round"
		stroke-linejoin="round"
		stroke-width="3"
		stroke="#ffffff" />
	
	<g>
		<path d="M23.93,17.13l3.59.53a.79.79,0,0,1,.68.79v9.21a.8.8,0,0,1-.68.79L23.93,29a.8.8,0,0,1-.92-.79V17.92A.81.81,0,0,1,23.93,17.13Z"
			  stroke="#F59E0B" stroke-miterlimit="10" stroke-width="0.5" fill="#F59E0B"/>
		<animateTransform attributeName="transform" type="translate"
			values="-0.1 1; 0 0; -0.1 -1; 0 0; -0.1 1"
			dur="1s"
			begin="0s"
			repeatCount="indefinite"/>
	</g>

	<g>
		<path d="M32.58,18.27l3.59.52a.8.8,0,0,1,.68.79v6.94a.8.8,0,0,1-.68.79l-3.59.53a.8.8,0,0,1-.92-.79v-8A.8.8,0,0,1,32.58,18.27Z"
			  stroke="#F59E0B" stroke-miterlimit="10" stroke-width="0.5" fill="#F59E0B"/>
		<animateTransform attributeName="transform" type="translate"
			values="-0.1 1; 0 0; -0.1 -1; 0 0; -0.1 1"
			dur="1s"
			begin="-0.1s"
			repeatCount="indefinite"/>
	</g>

	<g>
		<path d="M41.22,19.4l3.6.53a.79.79,0,0,1,.68.79v4.67a.8.8,0,0,1-.68.79l-3.6.52a.79.79,0,0,1-.91-.79V20.19A.8.8,0,0,1,41.22,19.4Z"
			  stroke="#F59E0B" stroke-miterlimit="10" stroke-width="0.5" fill="#F59E0B"/>
		<animateTransform attributeName="transform" type="translate"
			values="-0.1 1; 0 0; -0.1 -1; 0 0; -0.1 1"
			dur="1s"
			begin="-0.2s"
			repeatCount="indefinite"/>
	</g>
</svg>

					<div class="col-column">
						<span class="col-column-info-value wind-deg-value"></span>

						<span class="col-column-info-name">Wind Deg</span>
					</div>
				</div></div>
			</div>
		
    `;

	weatherApp.append(wrapper);
}
