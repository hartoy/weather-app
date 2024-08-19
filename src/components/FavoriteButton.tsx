import React from 'react'

type FavoriteButtonProps = {
  onClick: () => void
  isFavorite: boolean
}

export const FavoriteButton: React.FC<FavoriteButtonProps> = ({ onClick, isFavorite }) => {
  return (
    <button onClick={onClick} className="transition-transform duration-300 hover:scale-125 ">
      {isFavorite ? (
        <span role="img" aria-label="unfilled heart" className="text-xl">
          💗
        </span>
      ) : (
        <span role="img" aria-label="filled heart" className="text-xl">
          🤍
        </span>
      )}
    </button>
  )
}
