export type WeatherCardProps = {
  country: string
  city: string
  temperature: number
  tempMax: number
  tempMin: number
  humidity: number
  weatherIcon: string
  weatherDescription: string
  flagUrl: string | null
  wind: number
  onFavoriteChange?: () => void
}