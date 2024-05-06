## Overview

Imagine visiting the National Trust website and discovering not just the beauty of their properties, but also the current weather at each location. With this enhancement, you can picture yourself planning your next outing with confidence, knowing exactly what to expect weather-wise.

To bring this feature to life, a clever little script is added to the website. This script quietly works in the background, fetching the latest weather details from a special source. It's like having a personal weather forecaster just for the National Trust properties!

When you click on a property and view its details, the script springs into action, fetching the weather information specific to that location. It's as if the website magically knows what you need to know about the weather before you even ask!

Then, with a gentle touch, the weather details are delicately added to the page. You'll notice a small section with the temperature and a brief description of the weather conditions. It's simple, yet incredibly helpful.

And here's the best part: as you explore different properties on the website, the weather information updates automatically. It's like having a weather update tailored to each place you visit on the site, making your journey even more delightful.

In essence, this enhancement adds a touch of practicality to the National Trust website, making it not just a place to explore nature and history, but also a trusted companion for planning your outdoor adventures.


### Technical Detail

The script consists of three main functions:

- `fetchWeather(latitude, longitude)`: This function retrieves weather data from the mock endpoint using the latitude and longitude coordinates of the property.

- `getLocationData()`: This function extracts the latitude and longitude coordinates from the property's Google Maps link by parsing the DOM. It's where the script looks to find the necessary long-lat information.

- `displayWeather(weatherData)`: This function showcases the fetched weather information on the property's page. It generates a weather container element and embeds it into an appropriate location on the page.

Furthermore, the script features functionality to automatically refresh the weather information when users navigate between pages. It relies on the `window.onstorage` event to identify changes in the session storage and promptly updates the weather accordingly.