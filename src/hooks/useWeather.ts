import { useState } from 'react'
import { WeatherData } from '../types/WeatherData'

export const useWeather = () => {
  const [data, setData] = useState<WeatherData | null>(null)
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)

  const apiKey = process.env.REACT_APP_WEATHER_API_KEY
  const urlWeatherBase = 'https://api.openweathermap.org/data/2.5/weather'

  const fetchWeather = async (ciudad: string) => {
    setLoading(true)
    setError(null)
    setData(null)

    try {
      const response = await fetch(`${urlWeatherBase}?q=${ciudad}&appid=${apiKey}`)
      
      if (!response.ok) {
        if (response.status === 404) {
          throw new Error('Esa ciudad no existe')
        } else {
          throw new Error('Error en la API del clima')
        }
      }
      
      const info: WeatherData = await response.json()
      setData(info)
      return info
      
    } catch (err) {
      if (err instanceof Error) setError(err.message)
        return null
    } finally {
      setLoading(false)
    }
  }
  const countryCode = data?.sys.country.toLowerCase() || ''
  return { data, loading, error, countryCode, fetchWeather }
}
