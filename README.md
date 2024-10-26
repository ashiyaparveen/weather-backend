# Weather API

A simple Express-based Weather API that allows users to retrieve average weather data for specific cities and add new weather data.

## Features

- Get Average Weather Data: Fetches the average temperature, maximum temperature, and minimum temperature for a specified city.
- Post Weather Data: Allows users to add new weather data for cities, including temperature, maximum and minimum temperatures, and descriptions.

## Getting Started

### Prerequisites

To run this Weather API, you will need the following:

- Node.js installed on your machine.
- MongoDB installed and running (or a cloud MongoDB service).

### Installation

1. Clone the repository:

   bash
   git clone https://github.com/your-username/weather-api.git
   cd weather-api

# Weather API

A simple Express-based Weather API that allows users to manage and retrieve weather data for various cities. The API supports adding new weather records and fetching average weather statistics.

## Features

- *Get Average Weather Data:* Retrieve average temperature, maximum temperature, and minimum temperature for a specified city.
- *Add Weather Data:* Insert new weather records for different cities, including temperature, max/min temperatures, and descriptions.
- *MongoDB Integration:* Uses MongoDB to store and manage weather data.

## Getting Started

### Prerequisites

To run this Weather API, ensure you have the following installed:

- Node.js (for running the server)
- MongoDB (local instance or cloud service)
- A code editor (e.g., VSCode) for editing files

### Installation

1. *Clone the repository:*

   bash
   git clone https://github.com/your-username/weather-api.git
   cd weather-api

# Weather Model

This README provides information about the Mongoose schema used for the Weather API, specifically the structure of the Weather model that stores weather-related data.

## Overview

The Weather model represents the weather data for various cities, capturing essential metrics such as temperature, maximum and minimum temperatures, and descriptions of the weather conditions.

## Schema Definition

The Weather schema is defined using Mongoose and includes the following fields:

- city: String
  - Description: The name of the city for which the weather data is recorded.
  - Required: Yes

- temperature: Number
  - Description: The current temperature in the city.
  - Required: Yes

- tempMax: Number
  - Description: The maximum temperature recorded for the day.
  - Required: Yes

- tempMin: Number
  - Description: The minimum temperature recorded for the day.
  - Required: Yes

- description: String
  - Description: A textual description of the weather conditions (e.g., sunny, rainy).
  - Required: Yes

- date: Date
  - Description: The date when the weather data was recorded.
  - Default: Automatically set to the current date and time when a new record is created.

## Usage

This schema is typically used in conjunction with an Express.js application to store and manage weather data. The model can be used to perform operations such as creating, reading, updating, and deleting weather records in a MongoDB database.

### Example Usage

Here’s how to use the Weather model in your application:

```javascript
const Weather = require('./models/Weather');
 these are the sample datas stored in the mongodb
// Creating a new weather record
const newWeather = new Weather({
    city: "New York",
    temperature: 25,
    tempMax: 30,
    tempMin: 20,
    description: "Partly cloudy"
});

newWeather.save()
    .then(() => console.log("Weather data saved!"))
    .catch(err => console.error("Error saving weather data:", err));

// Querying weather data
Weather.find({ city: "New York" })
    .then(data => console.log("Weather data:", data))
    .catch(err => console.error("Error fetching weather data:", err));
npm start
 then the database will be connected and in the terminal it will show Server running on port 8084
Database connected!
below that the datas will be shown in the tereminal.
open the portal to view the output .
note:MongoDBCompass for data storage