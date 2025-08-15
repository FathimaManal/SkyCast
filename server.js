const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 4000;

// Middleware
app.use(cors());
app.use(express.json());

// Mock weather dataset
const weatherData = {
  'New York': { temp: 22, condition: 'sunny' },
  'London': { temp: 15, condition: 'cloudy' },
  'Tokyo': { temp: 28, condition: 'rainy' },
  'Sydney': { temp: 25, condition: 'sunny' },
  'Paris': { temp: 18, condition: 'cloudy' },
  'Mumbai': { temp: 32, condition: 'sunny' },
  'Toronto': { temp: 12, condition: 'rainy' },
  'Berlin': { temp: 16, condition: 'cloudy' }
};

// Helper function to add random temperature variation
function addTemperatureVariation(baseTemp) {
  const variation = Math.floor(Math.random() * 6) - 3; // -3 to +3 degrees
  return baseTemp + variation;
}

// Normalize user input to Title Case (e.g., "new york" -> "New York")
function toTitleCase(input) {
  return String(input)
    .toLowerCase()
    .split(/\s+/)
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

// Weather API endpoint
app.get('/api/weather', (req, res) => {
  const { city } = req.query;
  
  if (!city) {
    return res.status(400).json({ error: 'City parameter is required' });
  }
  
  const cityName = toTitleCase(city);
  
  if (weatherData[cityName]) {
    const baseData = weatherData[cityName];
    const weatherInfo = {
      city: cityName,
      temp: addTemperatureVariation(baseData.temp),
      condition: baseData.condition
    };
    
    res.json(weatherInfo);
  } else {
    res.status(404).json({ error: 'City not found' });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'Weather API is running' });
});

// Start server
app.listen(PORT, () => {
  console.log(`Weather API server running on port ${PORT}`);
  console.log(`Available cities: ${Object.keys(weatherData).join(', ')}`);
}); 