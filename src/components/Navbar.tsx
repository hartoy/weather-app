import React, { useEffect, useState } from 'react'
import { IconSwitcher } from './IconSwitcher'

export const Navbar = () => {
  const [navbarColor, setNavbarColor] = useState('bg-yellow-400 ')
  const [textColor, setTextColor] = useState('')

  return (
    <nav className={`${navbarColor} shadow-xl transition-colors duration-500 `}>
      <div className="container mx-auto px-2 py-2 flex items-center justify-between">
        <div className="flex items-center w-full md:w-auto">
          <IconSwitcher setNavbarColor={setNavbarColor} setTextColor={setTextColor} />
          <h1
            className={`${textColor} text-xl font-bold text-center mr-[50px] md:mr-0 md:text-left w-full md:w-auto md:ml-2 transition-transform duration-300 hover:scale-110`}
          >
            WeatherFlow
          </h1>
        </div>
      </div>
    </nav>
  )
}
