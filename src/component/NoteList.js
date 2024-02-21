import React from 'react';
import './NoteList.css';

function NoteList({ notes, deleteNote, clearAll, isDarkTheme }) {
  return (
    <div className={`note-list ${isDarkTheme ? 'dark' : 'light'}`}>
      <h2>Notes</h2>
      {notes.length === 0 ? (
        <p>No notes available.</p>
      ) : (
        <div className="notes-container">
          {notes.map((note) => (
            <div key={note.id} className="note">
              <div className="note-content">
                <button className="delete-button" onClick={() => deleteNote(note.id)}>Delete</button>
                <span>{note.text}</span>
              </div>
            </div>
          ))}
        </div>
      )}
      {notes.length > 0 && (
        <button className="clear-btn" onClick={clearAll}>Clear All</button>
      )}
    </div>
  );
}

export default NoteList;
