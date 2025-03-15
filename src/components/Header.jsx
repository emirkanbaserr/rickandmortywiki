import React from 'react'
import '/src/css/header.css'

function Header({ handleSearch }) {
    const imageClick = () => {
        window.location.reload()
    }

    const handleChange = (e) => {
        handleSearch(e.target.value);
    }

    return (
        <>
            <div className='header'>
                <img
                    src="https://res.cloudinary.com/dkfzj9tmk/image/upload/v1677166689/backend-project/Rick-And-Morty-Logo-Transparent-File_arpmel.png"
                    className='logo'
                    onClick={() => imageClick()}
                />
                <h1>Rick and Morty Wiki</h1>
                <input
                    type="text"
                    placeholder="Search a name..."
                    onChange={handleChange}
                />
            </div>
        </>
    )
}

export default Header
