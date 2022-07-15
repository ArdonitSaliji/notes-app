import React from 'react'
import { useMediaQuery } from 'react-responsive'
import Note from './Note'
import AddNote from './AddNote'
const NotesList = ({ notes, handleAddNote, handleDeleteNote }) => {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
  return (
    <div className='notes-list'>
      {isTabletOrMobile && <AddNote handleAddNote={handleAddNote} />}
      {notes.map((note, index) => (
        <Note
          handleDeleteNote={handleDeleteNote}
          key={index}
          id={note.id}
          text={note.text}
          date={note.date}
        />
      ))}
      {!isTabletOrMobile && <AddNote handleAddNote={handleAddNote} />}
    </div>
  )
}

export default NotesList
