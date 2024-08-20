import React from 'react'
import inFav from '../assets/images/infav.webp'
import outFav from '../assets/images/outfav.webp'

type FavoriteButtonProps = {
  onClick: () => void
  isFavorite: boolean
}

export const FavoriteButton: React.FC<FavoriteButtonProps> = ({ onClick, isFavorite }) => {
  return (
    <button onClick={onClick} className="transition-transform duration-300 hover:scale-125 bg-white rounded-full">
      {isFavorite ? <img src={inFav} alt="" className="h-7 w-7" /> : <img src={outFav} alt="" className="h-7 w-7" />}
    </button>
  )
}
