const axios = require('axios');

async function getWeatherData(city) {
  try {
    const apiKey = process.env.WEATHER_API_KEY;

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    const response = await axios.get(url);

    return {
      city: response.data.name,
      temperature: response.data.main.temp,
      weather: response.data.weather[0].main,
      humidity: response.data.main.humidity
    };

  } catch (error) {
    throw new Error('Failed to fetch weather data');
  }
}

module.exports = { getWeatherData };