import React, { useState } from "react";
import "./NoteForm.css";
import { TextField } from "@mui/material";


const NoteForm = (props) => {
  const [text, setText] = useState("");
  const [desc, setDesc] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const newNote = {
      id: Date.now(),
      text: text,
      desc: desc,
      timestamp: Date.now(),
    };
    props.addNote(newNote);
    setText("");
    setDesc("");
  };
  
  // checking condition if there is no user input then disable the button
  const isdisabled = !text.length || !desc.length;

  return (
    <form className="form-style border border-dark" onSubmit={handleSubmit}>
      {/* added color code to match the given task theme */}
      <div style={{ backgroundColor: "#e3ded5" }} className="card">
        <div style={{ backgroundColor: "#e3ded5" }} className="card-body">
          <TextField
            className="card-title mb-2"
            value={text}
            onChange={(e) => setText(e.target.value)}
            id="filled-basic"
            label="Title"
            variant="standard"
          />

          <textarea
            className="textbox card-text mb-2"
            type="text"
            value={desc}
            placeholder="Enter description"
            onChange={(e) => setDesc(e.target.value)}
          ></textarea>

          <button
            disabled={isdisabled}
            className="btn btn-primary btn-sm "
            type="submit"
          >
            Add Note
          </button>
        </div>
      </div>
    </form>
  );
};

export default NoteForm;
