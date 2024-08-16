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
}

const icons: IconData[] = [
  { icon: sunnyIcon, color: 'bg-yellow-400' },
  { icon: cloudyIcon, color: 'bg-gray-500' },
  { icon: rainyIcon, color: 'bg-blue-600' },
  { icon: nightIcon, color: 'bg-blue-900' },
  { icon: snowIcon, color: 'bg-white' },
  { icon: thunderIcon, color: 'bg-purple-600' },
]

type IconSwitcherProps = {
  setNavbarColor: (color: string) => void
}

export const IconSwitcher: React.FC<IconSwitcherProps> = ({ setNavbarColor }) => {
  const [currentIcon, setCurrentIcon] = useState(icons[0])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIcon((prevIcon) => {
        const currentIndex = icons.indexOf(prevIcon)
        const nextIndex = (currentIndex + 1) % icons.length
        const nextIcon = icons[nextIndex]
        setNavbarColor(nextIcon.color)
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
