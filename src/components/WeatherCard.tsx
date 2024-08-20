import React, { useEffect, useState } from 'react'
import { WeatherSvg } from 'weather-icons-animated'
import { WeatherCardProps } from '../types/WeatherCardProps'
import { FavoriteButton } from './FavoriteButton'
import { useFavorites } from '../context/FavoritesContext'
import { WeatherStates } from '../types/WeatherStates'
import windIcon from '../assets/images/wind.png'
import HumidiyIcon from '../assets/images/humidity.png'

export const WeatherCard: React.FC<WeatherCardProps> = ({
  city,
  temperature,
  tempMax,
  tempMin,
  humidity,
  weatherIcon,
  wind,
  flagUrl,
}) => {
  const [isFavorite, setIsFavorite] = useState<boolean>(false)
  const { favoriteCities, addFavorite, removeFavorite } = useFavorites()

  const difKelvin = 273.15
  const windInKmH = wind * 3.6

  // Actualiza el mapeo para usar estos valores
  const iconMap: Record<string, WeatherStates> = {
    '01d': 'sunny',
    '01n': 'clear-night',
    '02d': 'partlycloudy',
    '02n': 'partlycloudy',
    '03d': 'cloudy',
    '03n': 'cloudy',
    '04d': 'cloudy',
    '04n': 'cloudy',
    '09d': 'rainy',
    '09n': 'rainy',
    '10d': 'rainy',
    '10n': 'rainy',
    '11d': 'lightning',
    '11n': 'lightning',
    '13d': 'snowy',
    '13n': 'snowy',
    '50d': 'fog',
    '50n': 'fog',
  }

  const mappedIcon: WeatherStates = iconMap[weatherIcon as keyof typeof iconMap] || 'sunny'

  const temperatureInCelsius = Math.round(temperature - difKelvin)
  let temperatureClass = ''
  let bgHot = 'bg-white'

  if (temperatureInCelsius >= 27) {
    temperatureClass = 'text-red-500 pulse'
    bgHot = 'bg-red-300'
  } else if (temperatureInCelsius < 10) {
    temperatureClass = 'text-blue-500 pulse'
    bgHot = 'bg-blue-300'
  }

  useEffect(() => {
    setIsFavorite(favoriteCities.includes(city))
  }, [favoriteCities, city])

  const handleAddToFavorites = () => {
    if (isFavorite) {
      removeFavorite(city)
    } else {
      addFavorite(city)
    }
  }

  return (
    <div className={`flex flex-col border-2 border-black rounded p-3 ${bgHot}`}>
      <div className="flex items-center justify-between mb-2">
        {flagUrl && (
          <img src={flagUrl} alt="Bandera del país" className="w-7 h-7 rounded-full border-2 border-black " />
        )}
        <span className="text-center flex-1 text-3xl">{city}</span>
        <FavoriteButton onClick={handleAddToFavorites} isFavorite={isFavorite} />
      </div>
      <div className="flex flex-col items-center justify-center">
        <WeatherSvg state={mappedIcon} width={100} height={100} />
        <span className={`text-5xl ${temperatureClass}`}>{temperatureInCelsius}°C</span>
      </div>

      <div className="flex items-center justify-between w-1/2 md:w-1/3  m-auto mt-3">
        <span>
          Min <span className=" text-blue-500 ml-2">{Math.round(tempMin - difKelvin)}°C</span>
        </span>
        <span>
          Max <span className=" text-red-500 ml-2">{Math.round(tempMax - difKelvin)}°C</span>
        </span>
      </div>
      <div className="flex items-center justify-between w-1/2 md:w-1/3  m-auto mt-2">
        <span className="flex items-center ">
          <img className="w-6 h-6 mr-2" src={HumidiyIcon} alt="" /> {humidity} %
        </span>
        <span className="flex items-center">
          <img className="w-5 h-5 mr-2" src={windIcon} alt="" />
          {Math.round(windInKmH)} k/h
        </span>
      </div>
    </div>
  )
}
