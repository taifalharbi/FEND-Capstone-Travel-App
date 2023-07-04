# Travel App

This is a travel app that allows users to obtain weather information and images of their desired trip locations. It uses external APIs such as Weatherbit, Geonames, and Pixabay.

## Project Structure

- `package.json` - Contains information about the project, scripts, and dependencies.
- `webpack.config.js` - Webpack configuration file.
- `src/server/server.js` - Server-side code for the app.
- `src/client/index.js` - Client-side code that imports functions and event listeners.
- `src/client/html/index.html` - HTML structure for the app.
- `src/client/js/app.js` - Contains URLS, API keys, and primary functions for APIs.
- `src/client/styles/style.scss` - Styling for the app.

## Usage

1. Install the dependencies: `npm install`
2. Build the project: `npm run build`
3. Start the server: `npm start` or `npm run dev`
4. Open the app in your browser: [http://localhost:6969](http://localhost:6969)

## Testing

Run the tests using Jest: `npm run test`
