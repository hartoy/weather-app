import React, { useEffect, useState } from 'react'
import { useFavorites } from '../context/FavoritesContext'
import { useWeather } from '../hooks/useWeather'
import { WeatherCard } from './WeatherCard'
import noWolrdImg from '../assets/images/icon-no-world.webp'

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
    <div className="container-fav-cities mt-[65px] md:mt-[45px] lg:mt-[85px]">
      <h2 className="text-2xl font-bold mb-4 text-center text-black lg:text-white md:text-3xl lg:text-4xl">
        Ciudades Favoritas
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-2">
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
              wind={data.wind.speed}
              flagUrl={`https://flagcdn.com/w320/${data.sys.country.toLowerCase()}.png`}
            />
          ))
        ) : (
          <div className="flex flex-col justify-center items-center col-span-1 sm:col-span-2 md:col-span-3 mt-3 md:mt-18">
            <p className="text-center text-black lg:text-white md:text-2xl">No tienes ciudades favoritas.</p>
            <img
              src={noWolrdImg}
              alt="No favorite cities"
              className="w-52 h-48 md:w-64 md:h-56 lg:w-80 lg:h-72 mt-3 ml-8 md:ml-12"
            />
          </div>
        )}
      </div>
    </div>
  )
}
