# Documentation

The app utilises external [OpenWeatherAPI](https://openweathermap.org/api) and in-build [Navigator API](https://developer.mozilla.org/en-US/docs/Web/API/Navigator) to check weather conditions at one's current location. Here, one might find some usefull info about the app.

## How to use the code

In order to deploy this app in development/production mode on your machine, please follow these simple steps:

1. Clone the directory on your machine.
```
git clone https://github.com/thatkit/weather-app-1.git
```
2. Install all dependencies.
```
npm i
```
3. The express code from `server.js` uses environment variable for storing [OpenWeatherAPI](https://openweathermap.org/api) key. At this point, one should create one on the official site and store it in the root directory as `.env` with the following structure. Check `.env_sample` for reference. 
```
OPEN_WEATHER_API_KEY=here_goes_your_api_key
``` 
One of the ways of doing this can be nano terminal editor:

i. Open `.env_sample` file.
```
nano .env_sample
```

ii. Replace `here_goes_your_api_key` with your OpenWeatherAPI key.

iii. Close and save as `.env`.

4. Run `npm run start`. Check the next section for reference.

5. Now, the app should be running on [https://localhost:5000](https://localhost:5000).

## Available Scripts

In the project directory, one can run:

### `npm run start`

Basically, runs server (`server.js`) both in the development and production mode. Since geolocation API requires secure connection, both modes are run via HTTP**S**.
Open [https://localhost:5000](https://localhost:5000) to view it in the browser in development mode.

If one is willing to switch between the two modes, please consider browsing to `server.js` in the root directory and change the following lines to the appropriate one:
```javascript
const app = express(); // for production
// const app = require('https-localhost')(); // for development only
```
For example, at this state of code, the production mode is *'enabled'*.

### `npm run react`

Launches the client-side (React) code solely. It migth be used for adjusting styles without having to re-build and serve code through Express.js/
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm run build`

Builds the app for production to the `build` folder.
Express.js code (the `server.js` file in the root directory) serves bundled files from the `build` folder.

### Other scripts

There are other prebuild scripts from React.js, but most likely one will never use those.

## Technolgies used

### Frontend:
- React.js;
- Bootstrap (Reactstrap).

### Backend:
- Express.js, Node.js.

### Author

[thatkit](https://github.com/thatkit) from Vladivostok, Russia.