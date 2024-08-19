import React, { useEffect, useState } from 'react'
import { WeatherCardProps } from '../types/WeatherCardProps'
import { FavoriteButton } from './FavoriteButton'
import { useFavorites } from '../context/FavoritesContext'
import windIcon from '../assets/icons/wind.svg'
import HumidiyIcon from '../assets/icons/humidity.svg'

export const WeatherCard: React.FC<WeatherCardProps> = ({
  city,
  temperature,
  tempMax,
  tempMin,
  humidity,
  weatherIcon,
  weatherDescription,
  wind,
  flagUrl,
}) => {
  const [isFavorite, setIsFavorite] = useState<boolean>(false)
  const { favoriteCities, addFavorite, removeFavorite } = useFavorites()

  const difKelvin = 273.15

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
    <div className="flex flex-col border-2 border-white rounded p-3">
      <div className="flex items-center justify-between">
        {flagUrl && (
          <img src={flagUrl} alt="Bandera del país" className="w-8 h-8 rounded-full border-2 border-white " />
        )}
        <span className="text-center flex-1 text-3xl">{city}</span>
        <FavoriteButton onClick={handleAddToFavorites} isFavorite={isFavorite} />
      </div>
      <div className="flex flex-col items-center justify-center">
        <img
          src={`http://openweathermap.org/img/wn/${weatherIcon}@2x.png`}
          alt={weatherDescription}
          className="w-32 h-32"
        />
        <span className="text-4xl">{Math.round(temperature - difKelvin)}°C</span>
      </div>

      <div className="flex items-center justify-between w-1/2 md:w-1/3  m-auto">
        <span>Max {Math.round(tempMax - difKelvin)}°C</span>
        <span>Min {Math.round(tempMin - difKelvin)}°C</span>
      </div>
      <div className="flex items-center justify-between w-1/2 md:w-1/3  m-auto">
        <span className="flex items-center bg-red-500">
          <img className="w-6 h-6" src={HumidiyIcon} alt="" /> {humidity} %
        </span>
        <span className="flex items-center bg-red-500">
          <img className="w-5 h-5" src={windIcon} alt="" />
          {wind} m/s
        </span>
      </div>
    </div>
  )
}
