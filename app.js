AFRAME.registerComponent('weather-time', {
    init: function () {
        // Set up AR.js pattern markers
        const marker1 = 'pattern-marker-1';
        const marker2 = 'pattern-marker-2';

        // Add event listener for when markers are detected
        this.el.sceneEl.addEventListener('markerFound', (event) => {
            const markerID = event.detail.marker.id;

            // Fetch weather and time data based on marker ID
            if (markerID === marker1) {
                this.fetchWeatherData();
            } else if (markerID === marker2) {
                this.fetchTimeData();
            }
        });
    },
    fetchWeatherData: function () {
        alert(`Temperature in La Plata: 22°C`);
        // // Replace 'YOUR_WEATHER_API_KEY' with your OpenWeatherMap API key
        // const apiKey = 'YOUR_WEATHER_API_KEY';
        // const city = 'La Plata,AR';
        // const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

        // // Fetch weather data
        // fetch(apiUrl)
        //     .then(response => response.json())
        //     .then(data => {
        //         const temperature = data.main.temp;
        //         alert(`Temperature in La Plata: ${temperature}°C`);
        //     })
        //     .catch(error => console.error('Error fetching weather data:', error));
    },
    fetchTimeData: function () {
        // Fetch time data using JavaScript Date object
        const currentTime = new Date();
        const hours = currentTime.getHours();
        const minutes = currentTime.getMinutes();
        const timeString = `${hours}:${minutes}`;

        alert(`Current time: ${timeString}`);
    }
});
