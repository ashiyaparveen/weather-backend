const express = require('express');
const router = express.Router();
const Weather = require('../models/Weather');

// GET weather data
router.get('/:city', async (req, res) => {
    const city = req.params.city;
    try {
        // Aggregate to find the average of temperature, tempMax, and tempMin
        const result = await Weather.aggregate([
            { $match: { city: city } },
            {
                $group: {
                    _id: "$city",
                    avgTemperature: { $avg: "$temperature" },
                    avgTempMax: { $avg: "$tempMax" },
                    avgTempMin: { $avg: "$tempMin" }
                }
            }
        ]);

        // Check if any data was found and respond accordingly
        if (result.length > 0) {
            res.json({
                city: city,
                avgTemperature: result[0].avgTemperature.toFixed(2),
                avgTempMax: result[0].avgTempMax.toFixed(2),
                avgTempMin: result[0].avgTempMin.toFixed(2),
            });
        } else {
            res.status(404).json({ message: "No data found for this city" });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});


// POST weather data
router.post('/add', async (req, res) => {
    const data = req.body;
    console.log(data);

    const weather = new Weather({
        city:data.city,
        temperature:data.temperature,
        tempMax:data.tempMax,
        tempMin:data.tempMin,
        description:data.description
    });

    try {
        const savedWeather = await weather.save();
        res.status(201).json(savedWeather);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

module.exports = router;
