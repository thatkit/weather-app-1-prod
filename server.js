const express = require('express');
const fetch = require('node-fetch');
require('dotenv').config();

const app = express();
// const app = require('https-localhost')(); // for development only

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Listening at http://localhost:${port}`));

app.use(express.static('./build'));

app.get('/:lat/:lon', async (req, res) => {
    const apiKEY = process.env.OPEN_WEATHER_API_KEY;
    const apiURL = `https://api.openweathermap.org/data/2.5/weather?lat=${req.params.lat}&lon=${req.params.lon}&appid=${apiKEY}`;

    const response = await fetch(apiURL);
    const json = await response.json();

    res.json(json);
});