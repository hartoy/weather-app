# Weather App

[Site is online!](https://weather-app-red-phi-86.vercel.app/)

Overview
This is a Weather App built with React and TypeScript that provides weather forecasts for various cities. It displays current weather conditions, forecasts, and allows users to save their favorite cities. The app is responsive and adjusts its layout based on the screen size. It also includes special animations for extreme temperatures and integrates with various external resources for enhanced functionality.

## Features

- City Search: Allows users to search for the weather of any city.
- Weather Details: Displays current temperature, weather conditions, humidity, and wind speed.
- Favorite Cities: Users can add cities to their favorites list and view weather information for these cities.
- Responsive Design: The app adjusts its layout and background image based on the device's screen size.
- Loading State: Displays a loading spinner while fetching weather data.
- Error Handling: Shows appropriate messages if there is an error with the API request or if the city is not found.
- Special Animations: Features animations for extreme temperatures, including pulsating effects and color changes for temperatures above or below certain thresholds.
- Flag API Integration: Uses the Flag CDN API to display country flags.
- Weather Icons Library: Utilizes the Weather Icons Animated, an icon library for weather conditions that complements the weather API icons.

## Technologies Used

- React: JavaScript library for building user interfaces.
- TypeScript: Adds static type definitions to JavaScript, improving code quality and developer experience.
- Tailwind CSS: Utility-first CSS framework for styling.
- OpenWeatherMap API: Provides weather data.
- Flag CDN API: Provides country flags for displaying in the app.
- Weather Icons Animated: Provides animated weather icons.
- React Context API: Manages global state for favorite cities.
- React Hooks: Used for managing component state and side effects.

## Installation

Clone the repository:

```sh
git clone https://github.com/your-username/weather-app.git
```

Navigate to the project directory:

```sh
cd weather-app
```

Install dependencies:

```sh
npm install
```

Create a .env file in the root directory and add your OpenWeatherMap API key:

```sh
REACT_APP_WEATHER_API_KEY=your_api_key_here
```

Start the development server:

```sh
npm start
```

## Usage

1- Open the app in your browser. You will see a search form where you can enter a city name.
2- After entering a city and submitting the form, the app will fetch and display the current weather conditions for that city.
3- You can add cities to your favorites list, which will be displayed on the "Favorite Cities" page.
If you have no favorite cities, a placeholder image and message will be shown.

## Components

- WeatherCard: Displays weather details for a specific city.
- SearchForm: Allows users to input and submit city names for weather lookup.
- FavCities: Displays a list of favorite cities and their weather details.
- Navbar: Provides navigation options within the app.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

For any questions or inquiries, please contact:

Name: Ignacio
Email: hartoyy@hotmail.com
[Portfolio](https://nachohardoy-web.vercel.app/).
