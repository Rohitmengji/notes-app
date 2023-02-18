import React from "react";
import NoteEditor from "../noteeditor/NoteEditor";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

const NoteList = (props) => {
  return (
    // added list to represent in number
    <ul style={{ listStyleType: "number" }}>
      {props.notes.map((note, desc) => (
        <li key={note.id}>
          {props.editingNoteId === note.id ? (
            // passes props
            <NoteEditor
              note={note}
              desc={desc}
              setEditingNoteId={props.setEditingNoteId}
              editNote={props.editNote}
            />
          ) : (
            <>
              <div
                style={{
                  backgroundColor: "#e3ded5",
                  width: "24rem",
                  height: "auto",
                }}
                className="card mt-3 border border-dark"
              >
                <div className="card-body">
                  <div>
                    <h3 className="card-title">{note.text} </h3>{" "}
                  </div>
                  <div className="card-text">{note.desc}</div>
                  <div className="mt-2">
                    {new Date(note.timestamp).toLocaleString()}
                  </div>
                  <button
                    className="mx-2 mt-1"
                    onClick={() => props.setEditingNoteId(note.id)}
                  >
                    <EditIcon />
                  </button>
                  <button onClick={() => props.deleteNote(note.id)}>
                    <DeleteIcon />
                  </button>
                </div>{" "}
              </div>{" "}
            </>
          )}
        </li>
      ))}
    </ul>
  );
};

export default NoteList;
