import { useState, useEffect } from 'react';

import { 
  WiDaySunny, WiRain, WiCloudy, WiDayCloudy, WiThunderstorm 
} from 'react-icons/wi';

import { Card, Row, Col, Spinner, Button } from 'react-bootstrap';

import axios from 'axios';

const API_KEY = '7a2b1b41ab2bf87588194671196ccd6d'; // Your OpenWeatherMap API

const WeatherWidget = () => {
  const [weather, setWeather] = useState(null);
  const [locationName, setLocationName] = useState('Locating...');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const savedData = localStorage.getItem('weatherData');
    const savedTime = localStorage.getItem('weatherTime');

    const isRecent = savedTime && (Date.now() - parseInt(savedTime) < 60 * 60 * 1000); // within 1 hour

    if (savedData && isRecent) {
      const parsed = JSON.parse(savedData);
      setWeather(parsed.weather);
      setLocationName(parsed.location);
      setLoading(false);
    } else {
      fetchWeather(); // fallback to live fetch
    }
  }, []);

  const fetchWeather = async () => {
    setLoading(true);
    try {
      // 1. Get current location
      navigator.geolocation.getCurrentPosition(async (pos) => {
        const { latitude, longitude } = pos.coords;
        await fetchWeatherData(latitude, longitude);
      }, async () => {
        // 2. Fallback: Dodoma if location denied
        const defaultLat = -6.1731;
        const defaultLon = 35.741;
        await fetchWeatherData(defaultLat, defaultLon);
        setLocationName("Dodoma, Tanzania (default)");
      });
    } catch (error) {
      console.error("Location error:", error);
      setLoading(false);
    }
  };

  const fetchWeatherData = async (lat, lon) => {
    try {
      const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`;
      const response = await axios.get(url);

      // Get current weather from the first item
      const today = response.data.list[0];
      const city = response.data.city.name + ", " + response.data.city.country;

      // Extract 5-day forecast from 3-hour data (one per day)
      const daily = [];
      const seen = new Set();

      for (let item of response.data.list) {
        const date = item.dt_txt.split(" ")[0];
        if (!seen.has(date)) {
          seen.add(date);
          daily.push({
            day: new Date(item.dt_txt).toLocaleDateString('en-US', { weekday: 'short' }),
            temp: Math.round(item.main.temp),
            icon: item.weather[0].main.toLowerCase()
          });
        }
        if (daily.length === 5) break;
      }

      const weatherData = {
        temp: Math.round(today.main.temp),
        condition: today.weather[0].description,
        humidity: today.main.humidity,
        wind: today.wind.speed,
        forecast: daily
      };

      setWeather(weatherData);
      setLocationName(city);

      // Save to localStorage here AFTER data is ready
      localStorage.setItem('weatherData', JSON.stringify({ weather: weatherData, location: city }));
      localStorage.setItem('weatherTime', Date.now().toString());

    } catch (error) {
      console.error("Weather fetch error:", error);
    } finally {
      setLoading(false);
    }
  };

  const getWeatherIcon = (condition) => {
    const size = 40;
    condition = condition.toLowerCase();
    if (condition.includes("sun")) return <WiDaySunny size={size} />;
    if (condition.includes("rain")) return <WiRain size={size} />;
    if (condition.includes("thunder")) return <WiThunderstorm size={size} />;
    if (condition.includes("cloud")) return <WiCloudy size={size} />;
    return <WiDayCloudy size={size} />;
  };

  return (
    <Card className="weather-card text-white bg-dark p-3">
      <Card.Body>
        <Row className="justify-content-between align-items-center">
          <Card.Title className="mb-3">🌤️ Weather Forecast</Card.Title>
          <Button variant="light" size="sm" onClick={fetchWeather}>🔁 Refresh</Button>
        </Row>

        {loading ? (
          <div className="text-center py-4">
            <Spinner animation="border" />
          </div>
        ) : (
          <>
            <Row className="align-items-center mb-3">
              <Col xs="auto">
                {weather && getWeatherIcon(weather.condition)}
              </Col>
              <Col>
                <div className="display-4">{weather?.temp}°C</div>
                <div style={{ textTransform: 'capitalize' }}>{weather?.condition}</div>
              </Col>
              <Col>
                <div>💧 Humidity: {weather?.humidity}%</div>
                <div>🌬️ Wind: {weather?.wind} km/h</div>
                <div>📍 {locationName}</div>
              </Col>
            </Row>

            <Row className="text-center">
              {weather?.forecast.map((day, index) => (
                <Col key={index}>
                  <div>{day.day}</div>
                  {getWeatherIcon(day.icon)}
                  <div>{day.temp}°C</div>
                </Col>
              ))}
            </Row>
          </>
        )}
      </Card.Body>
    </Card>
  );
};

export default WeatherWidget;
