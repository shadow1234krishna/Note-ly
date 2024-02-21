import React, { useState } from 'react';
import './App.css';
import NoteForm from './component/NoteForm';
import NoteList from './component/NoteList';

function App() {
  const [notes, setNotes] = useState([]);
  const [isDarkTheme, setIsDarkTheme] = useState(true);

  const addNote = (text) => {
    const newNote = {
      id: Math.random().toString(36).substr(2, 9),
      text: text
    };
    setNotes([...notes, newNote]);
  };

  const deleteNote = (id) => {
    setNotes(notes.filter(note => note.id !== id));
  };

  const clearAllNotes = () => {
    setNotes([]);
  };

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <div>
    
    <div className={`App ${isDarkTheme ? 'dark' : 'light'}`}>
    
      <header className="App-header">
      <h1 className="Note">Notes App</h1>
        <button onClick={toggleTheme}>{isDarkTheme ? 'Light Theme' : 'Dark Theme'}</button>
      </header>
      <main className="App-main">
        <NoteForm addNote={addNote} />
        <NoteList notes={notes} deleteNote={deleteNote} clearAll={clearAllNotes} isDarkTheme={isDarkTheme} />
      </main>
    </div>
    </div>
  );
}

export default App;
