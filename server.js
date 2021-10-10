const express = require('express');
const fetch = require('node-fetch');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`);
});

app.use(express.static('public'));

app.get('/weather/:city', async (req, res) => {
    const apiKEY = process.env.OPEN_WEATHER_API_KEY;
    const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${req.params.city}&appid=${apiKEY}`;

    const response = await fetch(apiURL);
    const json = await response.json();
    console.log(json);
});