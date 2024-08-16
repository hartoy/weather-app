import React, { useEffect, useState } from 'react'
import { useWeather } from './hooks/useWeather'
import { useFlag } from './hooks/useFlag'
import { Navbar } from './components/Navbar'
import { WeatherCard } from './components/WeatherCard'
import { FavCities } from './components/FavCities'

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
        <form className="max-w-sm mx-auto mt-4 mb-4" onSubmit={handleSubmit}>
          <input
            type="text"
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500"
            placeholder="Ingrese su búsqueda..."
            value={ciudad}
            onChange={handleInputCiudad}
          />
          <button
            type="submit"
            className="mt-2 w-full px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
          >
            Buscar
          </button>
        </form>

        <div>
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
        </div>
      </div>
      <FavCities />
    </>
  )
}
