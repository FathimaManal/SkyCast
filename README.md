# Weather Dashboard Backend

Express.js server providing weather data API for the Weather Dashboard frontend.

## Features

- REST API endpoint for weather data
- Mock dataset with 8 cities
- Random temperature variations for dynamic data
- CORS enabled for frontend integration
- Health check endpoint

## Setup

1. Install dependencies:
```bash
npm install
```

2. Start the server:
```bash
# Development mode (with auto-restart)
npm run dev

# Production mode
npm start
```

The server will run on `http://localhost:4000`

## API Endpoints

### GET /api/weather?city=CityName
Returns weather data for the specified city.

**Response:**
```json
{
  "city": "New York",
  "temp": 24,
  "condition": "sunny"
}
```

### GET /api/health
Health check endpoint.

**Response:**
```json
{
  "status": "OK",
  "message": "Weather API is running"
}
```

## Available Cities

- New York
- London
- Tokyo
- Sydney
- Paris
- Mumbai
- Toronto
- Berlin

## Weather Conditions

- sunny
- cloudy
- rainy

Each request adds a random temperature variation of ±3°C to simulate dynamic data. 