import React from 'react'

const Header = ({ darkMode }) => {
  return (
    <div className='header'>
      <h1>Notes App - by Ardonit Saliji</h1>
      <button onClick={() => darkMode((prev) => !prev)} className='save'>
        Toggle Mode
      </button>
    </div>
  )
}

export default Header
