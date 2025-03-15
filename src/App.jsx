import { useState, useEffect } from 'react'
import './App.css'
import Header from './components/Header'
import Cards from './components/cards'
import Pagination from './components/Pagination'
import Filter from './components/Filter'
import axios from 'axios'
import { use } from 'react'

const url = 'https://rickandmortyapi.com/api/'

function App() {
  const [currentPage, setCurrentPage] = useState(1)
  const [filters, setFilters] = useState({ gender: [], status: [], location: [] })
  const [characters, setCharacters] = useState([])
  const [filteredCharacters, setFilteredCharacters] = useState([])

  const getAllCharacters = async () => {
    const response = await axios.get(`${url}character/?page=${currentPage}`)
    setCharacters(response.data.results)
    setFilteredCharacters(response.data.results)
  }

  useEffect(() => {
    getAllCharacters()
  }, [currentPage])

  const handleSearch = (e) => {
    const filteredCharacters = characters.filter(character => character.name.toLowerCase().includes(e.toLowerCase()))
    setCharacters(filteredCharacters)
    console.log(characters)
  }

  return (
    <>
      <Header handleSearch={handleSearch} />
      <div className='container'>
        <Filter filters={filters} setFilters={setFilters} />
        <Cards currentPage={currentPage} filters={filters} characters={filteredCharacters} />
      </div>
      <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} />
    </>
  )
}

export default App
