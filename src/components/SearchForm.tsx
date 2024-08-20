import React from 'react'

interface SearchFormProps {
  ciudad: string
  handleInputCiudad: (e: React.ChangeEvent<HTMLInputElement>) => void
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void
}

const SearchForm: React.FC<SearchFormProps> = ({ ciudad, handleInputCiudad, handleSubmit }) => {
  return (
    <form className="mt-4 mb-4 flex max-w-[800px] mx-auto" onSubmit={handleSubmit}>
      <input
        type="text"
        className="w-full  border-2 border-black  rounded-tl-md rounded-bl-md shadow-sm focus:outline-none focus:border-gray-500 text-center md:text-left text-black pl-2"
        placeholder="Ingrese su búsqueda.."
        value={ciudad}
        onChange={handleInputCiudad}
      />
      <button
        type="submit"
        className=" px-4 py-2 bg-black border-black text-white  hover:bg-gray-900 focus:outline-none focus:bg-gray-900 w-1/4 h-full rounded-tr-md rounded-br-md"
      >
        Buscar
      </button>
    </form>
  )
}

export default SearchForm
