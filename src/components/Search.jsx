import React from 'react'
import { MdSearch } from 'react-icons/md'
const Search = ({ darkMode, handleSearchNote }) => {
  return (
    <div className='search__container'>
      <div className={darkMode ? 'search dark' : 'search'}>
        <MdSearch className='search-icons' size='1.3em' />
        <input className={darkMode ? 'inp dark' : 'inp'} onChange={(e) => handleSearchNote(e.target.value)} type='text' placeholder='Type to search...' />
      </div>

      <select name='Sort' className={darkMode ? 'search__select dark' : 'search__select'}>
        <option>Newest</option>
        <option>Oldest</option>
      </select>
    </div>
  )
}

export default Search
