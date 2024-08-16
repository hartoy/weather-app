import { useState } from 'react'

export const useFlag = () => {
  const [flagUrl, setFlagUrl] = useState<string | null>(null)
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)

  const restCountriesBase = 'https://restcountries.com/v3.1/alpha'

  const fetchFlag = async (countryCode: string) => {
    setLoading(true)
    setError(null)

    try {
      const countryResponse = await fetch(`${restCountriesBase}/${countryCode}`)
      if (!countryResponse.ok) throw new Error('Error en la API de banderas')

      const countryInfo = await countryResponse.json()
      setFlagUrl(countryInfo[0].flags.svg)

      
    } catch (err) {
      if (err instanceof Error) setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return { flagUrl, loading, error, fetchFlag }
}
