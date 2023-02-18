import React, { useState } from "react";
import Navbar from "../navbar/Navbar";
import NoteForm from "../noteform/NoteForm";
import NoteList from "../notelist/NoteList";

const NotesApp = () => {
  const [notes, setNotes] = useState([]);
  const [editingNoteId, setEditingNoteId] = useState(null);

  const addNote = (newNote) => {
    setNotes([...notes, newNote]);
  };

  const editNote = (updatedNote) => {
    const updatedNotes = notes.map((note) => {
      if (note.id === updatedNote.id) {
        return updatedNote;
      } else {
        return note;
      }
    });
    setNotes(updatedNotes);
    setEditingNoteId(null);
  };

  const deleteNote = (noteId) => {
    const newNotes = notes.filter((note) => note.id !== noteId);
    setNotes(newNotes);
  };

  return (
    <div>
      {/* display navbar */}
      <Navbar />
      <h3 className="text-center mt-2" > Notes App</h3>
      <NoteForm addNote={addNote} />
      {notes.length > 0 ? (
        <NoteList
          notes={notes}
          editingNoteId={editingNoteId}
          setEditingNoteId={setEditingNoteId}
          editNote={editNote}
          deleteNote={deleteNote}
        />
      ) : (
        <h3 className="text-center">No Notes Are Present Here </h3>
      )}
    </div>
  );
};

export default NotesApp;
