if(navigator.geolocation){
	const options = {
		method: 'GET',
		headers: {
			'key': '238e40d963a44be49c2104818230201',

		}
	};	navigator.geolocation.getCurrentPosition(position =>{
		let long = position.coords.longitude;
		let lant = position.coords.latitude;
		fetch(`http://api.weatherapi.com/v1/forecast.json?q=${lant},${long}`, options)
		.then(response => response.json())
		.then(response => {
			const temp_c = response.current.temp_c;
			const temp_f = response.current.temp_f;
			const description = response.current.condition.text;
			const icon = response.current.condition.icon;
			const country = response.location.country;
			const location = response.location.name;
			document.querySelector('.description').innerHTML = description;
			document.querySelector('.location_time_zone').innerHTML = `${country}/${location}`;
			let degree = document.getElementById('degree')
			degree.innerHTML = `${temp_c}`;
			degree.onclick = () =>{
				let degree_celsius = document.getElementById('degree_celsius')
				if(degree_celsius.innerHTML == 'C'){
					degree.innerHTML = `${temp_f}`;
					degree_celsius.innerHTML = 'F';
				}else if(degree_celsius.innerHTML == 'F'){
					degree.innerHTML = `${temp_c}`;
					degree_celsius.innerHTML = 'C';
				}
			};
			document.getElementById('icon').src = icon; 

		})
	});

}
