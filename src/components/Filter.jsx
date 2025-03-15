import React, { useEffect } from 'react'
import { useState, useRef } from 'react'
import '/src/css/filter.css'

const url = 'https://rickandmortyapi.com/api'

function filter(setFilters) {
  const [isRotated, setIsRotated] = useState(false)
  const [isRotated2, setIsRotated2] = useState(false)
  const [isRotated3, setIsRotated3] = useState(false)
  const [locations, setLocations] = useState([])
  const genderFilterRef = useRef(null)
  const statusFilterRef = useRef(null)
  const locationFilterRef = useRef(null)


  const gender = () => {
    setIsRotated(!isRotated)
    genderFilterRef.current.classList.toggle('open')
  }
  const status = () => {
    setIsRotated2(!isRotated2)
    statusFilterRef.current.classList.toggle('open')
  }
  const location = () => {
    setIsRotated3(!isRotated3)
    locationFilterRef.current.classList.toggle('open')
  }

  const getAllLocations = async () => {
    const response = await axios.get(`${url}/Location`)
    setLocations(response.data.results)
  }

  useEffect(() => {
    getAllLocations()
  }, [])

  return (
    <>
      <div className='filter'>
        <button className="filterHead" onClick={() => gender()}>Gender <i className={`fas ${isRotated ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i></button>
        <div className='genderFilterBody' ref={genderFilterRef}>
          <label className="filters" id='filters'>
            <input type="checkbox" className="checkBoxs" />
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M10.0007 15.1709L19.1931 5.97852L20.6073 7.39273L10.0007 17.9993L3.63672 11.6354L5.05093 10.2212L10.0007 15.1709Z"></path>
              </svg>
            </span>
            Male
          </label>
          <label className="filters" id='filters'>
            <input type="checkbox" className="checkBoxs" />
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M10.0007 15.1709L19.1931 5.97852L20.6073 7.39273L10.0007 17.9993L3.63672 11.6354L5.05093 10.2212L10.0007 15.1709Z"></path>
              </svg>
            </span>
            Female
          </label>
          <label className="filters" id='filters'>
            <input type="checkbox" className="checkBoxs" />
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M10.0007 15.1709L19.1931 5.97852L20.6073 7.39273L10.0007 17.9993L3.63672 11.6354L5.05093 10.2212L10.0007 15.1709Z"></path>
              </svg>
            </span>
            Unknown
          </label>
        </div>
        <button className="filterHead" onClick={() => status()}>Status <i className={`fas ${isRotated2 ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i></button>
        <div className='statusFilterBody' ref={statusFilterRef}>
          <label className="filters" id='filters'>
            <input type="checkbox" className="checkBoxs" />
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M10.0007 15.1709L19.1931 5.97852L20.6073 7.39273L10.0007 17.9993L3.63672 11.6354L5.05093 10.2212L10.0007 15.1709Z"></path>
              </svg>
            </span>
            Alive
          </label>
          <label className="filters" id='filters'>
            <input type="checkbox" className="checkBoxs" />
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M10.0007 15.1709L19.1931 5.97852L20.6073 7.39273L10.0007 17.9993L3.63672 11.6354L5.05093 10.2212L10.0007 15.1709Z"></path>
              </svg>
            </span>
            Dead
          </label>
          <label className="filters" id='filters'>
            <input type="checkbox" className="checkBoxs" />
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M10.0007 15.1709L19.1931 5.97852L20.6073 7.39273L10.0007 17.9993L3.63672 11.6354L5.05093 10.2212L10.0007 15.1709Z"></path>
              </svg>
            </span>
            Unknown
          </label>
        </div>
        <button className="filterHead" onClick={() => location()}>Location <i className={`fas ${isRotated3 ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i></button>
        <div className='locationFilterBody' ref={locationFilterRef}>
          {locations.map((location) => (
            <label className="filters" id='filters' key={location.id}>
              <input type="checkbox" className="checkBoxs" />
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M10.0007 15.1709L19.1931 5.97852L20.6073 7.39273L10.0007 17.9993L3.63672 11.6354L5.05093 10.2212L10.0007 15.1709Z"></path>
                </svg>
              </span>
              {location.name}
            </label>
          ))}
        </div>
      </div>
    </>
  )
}

export default filter