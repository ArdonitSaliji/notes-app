import React, { useEffect } from 'react'
import { MdSearch } from 'react-icons/md'
const Search = ({ notes, setNotes, darkMode, handleSearchNote }) => {
  const savedSort = JSON.parse(localStorage.getItem('notes-data'))

  function decide(e) {
    if (e.target.value === 'Newest') {
      const neww = notes.sort(
        (a, b) => new Date(...a.date.split('/')) - new Date(...b.date.split('/'))
      )

      localStorage.setItem('notes-data', JSON.stringify(neww))
      const savedSort = JSON.parse(localStorage.getItem('notes-data'))

      setNotes(savedSort)
    } else if (e.target.value === 'Oldest') {
      const oldd = notes.sort(
        (a, b) => new Date(...b.date.split('/')) - new Date(...a.date.split('/'))
      )

      localStorage.setItem('notes-data', JSON.stringify(oldd))
      const savedSort = JSON.parse(localStorage.getItem('notes-data'))

      setNotes(savedSort)
    }
  }

  useEffect(() => {
    localStorage.setItem('notes-data', JSON.stringify(savedSort))
  }, [])

  useEffect(() => {
    setNotes(savedSort)
  }, [])

  return (
    <div className='search__container'>
      <div className={darkMode ? 'search dark' : 'search'}>
        <MdSearch className='search-icons' size='1.3em' />
        <input
          className={darkMode ? 'inp dark' : 'inp'}
          onChange={(e) => handleSearchNote(e.target.value)}
          type='text'
          placeholder='Type to search...'
        />
      </div>

      <select
        onChange={(e) => decide(e)}
        name='Sort'
        className={darkMode ? 'search__select dark' : 'search__select'}
      >
        <option value='Newest'>Newest</option>
        <option value='Oldest'>Oldest</option>
      </select>
    </div>
  )
}

export default Search
