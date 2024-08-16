import React, { useEffect, useState } from 'react'
import { useWeather } from './hooks/useWeather'
import { useFlag } from './hooks/useFlag'
import { Navbar } from './components/Navbar'
import { WeatherCard } from './components/WeatherCard'
import { FavCities } from './components/FavCities'
import SearchForm from './components/SearchForm'

export const WheatherApp = () => {
  const [ciudad, setCiudad] = useState<string>('')
  const { data, countryCode, fetchWeather } = useWeather()
  const { fetchFlag, flagUrl } = useFlag()

  const handleInputCiudad = (e: any) => {
    setCiudad(e.target.value)
  }

  const handleSubmit = (e: any) => {
    e.preventDefault()
    if (ciudad.length > 0) fetchWeather(ciudad)
  }

  useEffect(() => {
    if (countryCode) {
      fetchFlag(countryCode)
    }
  }, [countryCode])

  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <SearchForm ciudad={ciudad} handleInputCiudad={handleInputCiudad} handleSubmit={handleSubmit} />

        {data ? (
          <WeatherCard
            country={data.sys.country}
            city={data.name}
            temperature={data.main.temp}
            tempMax={data.main.temp_max}
            tempMin={data.main.temp_min}
            humidity={data.main.humidity}
            weatherIcon={data.weather[0].icon}
            weatherDescription={data.weather[0].description}
            flagUrl={flagUrl}
          />
        ) : (
          <p>Ingresa una ciudad para ver el clima</p>
        )}

        <FavCities />
      </div>
    </>
  )
}
