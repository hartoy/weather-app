import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { FavoritesProvider } from './context/FavoritesContext'
import { WheatherApp } from './WheatherApp'

const rootElement = document.getElementById('root')
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement)
  root.render(
    <React.StrictMode>
      <FavoritesProvider>
        <WheatherApp />
      </FavoritesProvider>
    </React.StrictMode>
  )
} else {
  console.error('No root element found')
}
