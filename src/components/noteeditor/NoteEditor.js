import React,{useState} from 'react'
import './noteeditor.css'
import SaveAsOutlinedIcon from "@mui/icons-material/SaveAsOutlined";
import ClearRoundedIcon from "@mui/icons-material/ClearRounded";
// import {TextField} from '@mui/material'

const NoteEditor = (props) => {
    const [text, setText] = useState(props.note.text);
    const [desc, setDesc] = useState(props.note.desc);

  const handleSubmit = (event) => {
    event.preventDefault();
    const updatedNote = {
      ...props.note,
      ...props.desc,
      text: text,
      desc : desc,
      timestamp: Date.now(),
    };
    props.editNote(updatedNote);
    
  };

  return (
    <form style={{ width: "25rem", height: "45%" }} onSubmit={handleSubmit}>
      <div style={{ backgroundColor: "#e3ded5" }} className="card mt-3">
        <div className="card-body">
          <h4 className="card-title">Edit Notes Here</h4>
          <input
            type="text"
            placeholder="Edit Title"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <textarea
            className="textbox mt-2"
            name="desc"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          ></textarea>
          {/* added save icon */}
          <button className="my-2 " type="submit">
            <SaveAsOutlinedIcon />
          </button>
          {/* added cancel icon */}
          <button className="m-2" onClick={() => props.setEditingNoteId(null)}>
            <ClearRoundedIcon />
          </button>
        </div>
      </div>
    </form>
  );
  
}

export default NoteEditor