(function () {
  // Function to fetch weather data
  function fetchWeather(latitude, longitude) {
    const url = `https://europe-west1-amigo-actions.cloudfunctions.net/recruitment-mock-weather-endpoint/forecast?appid=a2ef86c41a&lat=${latitude}&lon=${longitude}&&units=metric`;
    return fetch(url)
      .then((response) => response.json())
      .catch((error) => console.error('Error fetching weather data:', error));
  }

  // Function to extract location data
  function getLocationData() {
    // Example 1: Extracting from HTML
    const locationElement = document.getElementById('propertyViewOnGoogleMaps');
    if (locationElement) {
      const destination = new URLSearchParams(document.getElementById('propertyViewOnGoogleMaps').href).get(
        'destination'
      );
      const latLong = destination.split(',');
      if (latLong) {
        return { latitude: latLong[0], longitude: latLong[1] };
      }
    }
    return null;
  }

  // Function to display weather information
  function displayWeather(weatherData) {
    if (!weatherData) {
      console.error('Weather data unavailable');
      return;
    }

    const weatherContainer = document.createElement('span');
    weatherContainer.classList.add('weather-info');

    const temperature = document.createElement('p');
    temperature.textContent = `Temperature: ${weatherData.list[0].main.temp}°C`;

    const description = document.createElement('p');
    description.textContent = `Description: ${weatherData.weather[0].description}`;

    weatherContainer.appendChild(temperature);
    weatherContainer.appendChild(description);

    // Find a suitable location on the page to insert the weather container
    const placeSummaryRegion = document.querySelector('[data-testid*="place-summary-region"]');
    if (placeSummaryRegion) {
      placeSummaryRegion.insertAdjacentElement('afterend',weatherContainer);
    } else {
      console.warn('Unable to find element to display weather information');
    }
  }

  // Main execution flow
  const locationData = getLocationData();
  if (locationData) {
    fetchWeather(locationData.latitude, locationData.longitude)
      .then(displayWeather)
      .catch((error) => console.error('Error displaying weather:', error));
  } else {
    console.warn('Location data not found');
  }
})();
