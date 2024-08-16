import React from 'react'

interface SearchFormProps {
  ciudad: string
  handleInputCiudad: (e: React.ChangeEvent<HTMLInputElement>) => void
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void
}

const SearchForm: React.FC<SearchFormProps> = ({ ciudad, handleInputCiudad, handleSubmit }) => {
  return (
    <form className="max-w-sm mx-auto mt-4 mb-4" onSubmit={handleSubmit}>
      <input
        type="text"
        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500 text-center md:text-left"
        placeholder="Ingrese su búsqueda.."
        value={ciudad}
        onChange={handleInputCiudad}
      />
      <button
        type="submit"
        className="mt-2 w-full px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
      >
        Buscar
      </button>
    </form>
  )
}

export default SearchForm
