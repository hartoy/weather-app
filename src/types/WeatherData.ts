export type WeatherData = {
  name: string
  sys: {
    country: string
  }
  main: {
    temp: number
    temp_max: number
    temp_min: number
    humidity: number
  }
  weather: {
    icon: string
    description: string
  }[]
};