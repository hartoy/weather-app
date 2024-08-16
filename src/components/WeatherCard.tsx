import React, { useEffect, useState } from 'react'
import { WeatherCardProps } from '../types/WeatherCardProps'
import { FavoriteButton } from './FavoriteButton'
import { useFavorites } from '../context/FavoritesContext'

export const WeatherCard: React.FC<WeatherCardProps> = ({
  country,
  city,
  temperature,
  tempMax,
  tempMin,
  humidity,
  weatherIcon,
  weatherDescription,
  flagUrl,
}) => {
  const [isFavorite, setIsFavorite] = useState<boolean>(false)
  const { favoriteCities, addFavorite, removeFavorite } = useFavorites()

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
    <div className="flex flex-col border border-blue-500 rounded p-3">
      <span>{country}</span>
      {flagUrl && <img src={flagUrl} alt="Bandera del país" className="w-16 h-16 mb-2" />}
      <span>{city}</span>
      <span>{temperature}°C</span>
      <span>Max {tempMax}°C</span>
      <span>Min {tempMin}°C</span>
      <span>Humedad {humidity} %</span>
      <img
        src={`http://openweathermap.org/img/wn/${weatherIcon}@2x.png`}
        alt={weatherDescription}
        className="w-16 h-16"
      />
      <FavoriteButton onClick={handleAddToFavorites} isFavorite={isFavorite} />
    </div>
  )
}
