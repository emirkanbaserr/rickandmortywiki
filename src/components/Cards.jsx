import React from 'react'
import '/src/css/cards.css'

function cards({ characters }) {

  return (
    <>
      <div className='cards'>
        {characters.map((character) => (
          <div className='card' key={character.id}>
            <img src={character.image} className='cardsPhotos' />
            <div>Name: {character.name}</div>
            <div>Gender: {character.gender}</div>
            <div>Status: {character.status}</div>
            <div>Location: {character.location.name}</div>
          </div>
        ))}
      </div>
    </>
  )
}

export default cards