import React, { createContext, useContext, useEffect, useState } from 'react'

interface FavoritesContextType {
  favoriteCities: string[]
  addFavorite: (city: string) => void
  removeFavorite: (city: string) => void
}

const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined)

export const FavoritesProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [favoriteCities, setFavoriteCities] = useState<string[]>([])

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem('favorites') || '[]')
    setFavoriteCities(storedFavorites)
  }, [])

  const addFavorite = (city: string) => {
    const updatedFavorites = [...favoriteCities, city]
    setFavoriteCities(updatedFavorites)
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites))
  }

  const removeFavorite = (city: string) => {
    const updatedFavorites = favoriteCities.filter((fav) => fav !== city)
    setFavoriteCities(updatedFavorites)
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites))
  }

  return (
    <FavoritesContext.Provider value={{ favoriteCities, addFavorite, removeFavorite }}>
      {children}
    </FavoritesContext.Provider>
  )
}

export const useFavorites = () => {
  const context = useContext(FavoritesContext)
  if (!context) {
    throw new Error('useFavorites must be used within a FavoritesProvider')
  }
  return context
}
