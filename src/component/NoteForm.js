import React, { useState } from 'react';
import './NoteForm.css';

function NoteForm({ addNote }) {
  const [text, setText] = useState('');

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!text.trim()) return;
    addNote(text);
    setText('');
  };

  return (
    <div className="note-form">
      <h2>Add Note</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter note..."
          value={text}
          onChange={handleChange}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default NoteForm;
