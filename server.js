const express = require('express');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`);
    console.log(process.env.OPEN_WEATHER_API_KEY);
});