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
      date: '4/25/2021',
    },
    {
      id: nanoid(),
      text: 'This is my second note!',
      date: '5/15/2022',
    },
    {
      id: nanoid(),
      text: 'This is my second note!',
      date: '5/15/2022',
    },
  ])

  const [searchText, setSearchText] = useState('')
  const [darkMode, setDarkMode] = useState(true)
  const savedNotes = localStorage.getItem('notes-data')
  const savedMode = JSON.parse(localStorage.getItem('darkMode'))

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode))
  }, [darkMode])

  useEffect(() => {
    localStorage.setItem('notes-data', JSON.stringify(notes))
  }, [notes])

  useEffect(() => {
    savedMode && setDarkMode(savedMode)
  }, [])

  useEffect(() => {
    setNotes(JSON.parse(savedNotes))
  }, [])

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
        <Search notes={notes} setNotes={setNotes} darkMode={darkMode} handleSearchNote={setSearchText} />
        <NotesList
          setNotes={setNotes}
          notes={notes.filter((note) => note.text.toLowerCase().includes(searchText))}
          handleAddNote={addNote}
          handleDeleteNote={deleteNote}
        />
      </div>
    </div>
  )
}

export default App
