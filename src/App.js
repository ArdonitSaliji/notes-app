import { useState, useEffect } from 'react'
import { nanoid } from 'nanoid'
import NotesList from './components/NotesList'
import Header from './components/Header'

import Search from './components/Search'

function App() {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: 'This is my first note!',
      date: '15/04/2022',
    },
    {
      id: nanoid(),
      text: 'This is my second note!',
      date: '25/04/2022',
    },
  ])

  const [searchText, setSearchText] = useState('')

  const [darkMode, setDarkMode] = useState(false)
  const savedNotes = JSON.parse(localStorage.getItem('react-notes-app-data'))

  useEffect(() => {
    setNotes(savedNotes)
  }, [])

  useEffect(() => {
    localStorage.setItem('react-notes-app-data', JSON.stringify(notes))
  }, [notes])

  const addNote = (text) => {
    const date = new Date()
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString(),
    }
    const newNotes = [...notes, newNote]
    setNotes(newNotes)
  }

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id)
    setNotes(newNotes)
  }

  return (
    <div className={darkMode ? 'dark-mode' : 'light-mode'}>
      <div className='container'>
        <Header darkMode={darkMode} setDarkMode={setDarkMode} />
        <Search darkMode={darkMode} handleSearchNote={setSearchText} />
        <NotesList setNotes={setNotes} notes={notes.filter((note) => note.text.toLowerCase().includes(searchText))} handleAddNote={addNote} handleDeleteNote={deleteNote} />
      </div>
    </div>
  )
}

export default App
