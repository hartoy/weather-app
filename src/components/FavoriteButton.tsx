import React from 'react'

type FavoriteButtonProps = {
  onClick: () => void
  isFavorite: boolean
}

export const FavoriteButton: React.FC<FavoriteButtonProps> = ({ onClick, isFavorite }) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-md focus:outline-none text-white ${
        isFavorite ? 'bg-red-500 hover:bg-red-600' : 'bg-blue-500 hover:bg-blue-600'
      }`}
    >
      {isFavorite ? 'Quitar de favoritos' : 'Agregar a Favoritos'}
    </button>
  )
}
