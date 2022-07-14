import React from 'react'

const Header = ({ darkMode, setDarkMode }) => {
  return (
    <div className='header'>
      <h1>Notes App - by Ardonit Saliji</h1>
      <button
        onClick={() => {
          setDarkMode((prev) => !prev)
        }}
        className={darkMode ? 'save dark' : 'save light'}
      >
        {darkMode ? 'Dark Mode' : 'Light Mode'}
      </button>
    </div>
  )
}

export default Header
