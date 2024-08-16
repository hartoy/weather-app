import React, { useEffect, useState } from 'react'
import { useFavorites } from '../context/FavoritesContext'
import { useWeather } from '../hooks/useWeather'
import { WeatherCard } from './WeatherCard'

export const FavCities = () => {
  const { favoriteCities } = useFavorites()
  const [weatherData, setWeatherData] = useState<any[]>([])
  const { fetchWeather } = useWeather()

  useEffect(() => {
    const fetchFavoriteCitiesWeather = async () => {
      if (favoriteCities.length > 0) {
        try {
          const weatherPromises = favoriteCities.map(async (city) => {
            const data = await fetchWeather(city)
            return data
          })
          const results = await Promise.all(weatherPromises)
          setWeatherData(results.filter((result) => result !== null)) // Filtrar resultados válidos
        } catch (error) {
          console.error('Error fetching favorite cities weather:', error)
        }
      } else {
        setWeatherData([])
      }
    }

    fetchFavoriteCitiesWeather()
  }, [favoriteCities])

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-4 text-center">Ciudades Favoritas</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {weatherData.length > 0 ? (
          weatherData.map((data, index) => (
            <WeatherCard
              key={index}
              country={data.sys.country}
              city={data.name}
              temperature={data.main.temp}
              tempMax={data.main.temp_max}
              tempMin={data.main.temp_min}
              humidity={data.main.humidity}
              weatherIcon={data.weather[0].icon}
              weatherDescription={data.weather[0].description}
              flagUrl={`https://flagcdn.com/w320/${data.sys.country.toLowerCase()}.png`}
            />
          ))
        ) : (
          <div className="flex flex-col">
            <p className="text-center">No tienes ciudades favoritas.</p>
          </div>
        )}
      </div>
    </div>
  )
}
