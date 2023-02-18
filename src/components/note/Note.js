import React, { useState,useEffect } from "react";
import Navbar from "../navbar/Navbar";
import NoteForm from "../noteform/NoteForm";
import NoteList from "../notelist/NoteList";

const NotesApp = () => {
  const [notes, setNotes] = useState([]);
  const [editingNoteId, setEditingNoteId] = useState(null);

  // This will check if there is any data stored in the local storage and
  // update the notes state accordingly when the component mounts.

  useEffect(() => {
    const storedNotes = JSON.parse(localStorage.getItem("notes"));
    // console.log(storedNotes);
    if (storedNotes) {
      setNotes(storedNotes);
    }
  }, []);

  const addNote = (newNote) => {
    const updatedNotes = [...notes, newNote];
    setNotes(updatedNotes);
    //adds data to the user local storage
    localStorage.setItem("notes", JSON.stringify(updatedNotes));
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
    // this is stored after edited input in local storage
    localStorage.setItem("notes", JSON.stringify(updatedNotes));
    setEditingNoteId(null);
  };

  const deleteNote = (noteId) => {
    const newNotes = notes.filter((note) => note.id !== noteId);
    setNotes(newNotes);
    localStorage.setItem("notes", JSON.stringify(newNotes));
  };

  return (
    <div>
      {/* display navbar */}
      <Navbar />
      <h3 className="text-center mt-2"> Notes App</h3>
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
