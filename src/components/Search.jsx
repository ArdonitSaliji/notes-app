import React from 'react'
import { MdSearch } from 'react-icons/md'
const Search = ({ darkMode, handleSearchNote }) => {
  return (
    <div className={darkMode ? 'search dark' : 'search'}>
      <MdSearch className='search-icons' size='1.3em' />
      <input className={darkMode ? 'inp dark' : 'inp'} onChange={(e) => handleSearchNote(e.target.value)} type='text' placeholder='Type to search...' />
    </div>
  )
}

export default Search
