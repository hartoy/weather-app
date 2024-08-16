import React, { useState, useEffect } from 'react'
import sunnyIcon from '../assets/icons/day.svg'
import rainyIcon from '../assets/icons/rainy-6.svg'
import cloudyIcon from '../assets/icons/cloudy.svg'
import nightIcon from '../assets/icons/night.svg'
import snowIcon from '../assets/icons/snowy-6.svg'
import thunderIcon from '../assets/icons/thunder.svg'

type IconData = {
  icon: string
  color: string
  textColor: string
}

const icons: IconData[] = [
  { icon: sunnyIcon, color: 'bg-yellow-400', textColor: 'text-black' },
  { icon: cloudyIcon, color: 'bg-gray-500', textColor: 'text-white' },
  { icon: rainyIcon, color: 'bg-blue-600', textColor: 'text-black' },
  { icon: nightIcon, color: 'bg-blue-900', textColor: 'text-white' },
  { icon: snowIcon, color: 'bg-white', textColor: 'text-black' },
  { icon: thunderIcon, color: 'bg-purple-600', textColor: 'text-white' },
]

type IconSwitcherProps = {
  setNavbarColor: (color: string) => void
  setTextColor: (color: string) => void
}

export const IconSwitcher: React.FC<IconSwitcherProps> = ({ setNavbarColor, setTextColor }) => {
  const [currentIcon, setCurrentIcon] = useState(icons[0])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIcon((prevIcon) => {
        const currentIndex = icons.indexOf(prevIcon)
        const nextIndex = (currentIndex + 1) % icons.length
        const nextIcon = icons[nextIndex]
        setNavbarColor(nextIcon.color)
        setTextColor(nextIcon.textColor)
        return nextIcon
      })
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <img
      src={currentIcon.icon}
      alt="Weather icon"
      className="w-14 h-14 ml-2 transition-transform duration-300 hover:scale-125"
    />
  )
}
