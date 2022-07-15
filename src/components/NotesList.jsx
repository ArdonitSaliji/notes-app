import React from 'react'
import Note from './Note'
import AddNote from './AddNote'
const NotesList = ({ notes, handleAddNote, handleDeleteNote }) => {
  return (
    <div className='notes-list'>
      {notes.map((note, index) => (
        <Note
          handleDeleteNote={handleDeleteNote}
          key={index}
          id={note.id}
          text={note.text}
          date={note.date}
        />
      ))}
      <AddNote handleAddNote={handleAddNote} />
    </div>
  )
}

export default NotesList
