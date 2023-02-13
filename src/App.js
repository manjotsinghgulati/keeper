import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Note from './components/Note';
import notes from './notes'
import CreateArea from './components/CreateArea';
import { useState } from 'react';


const App = () => {

const [notes, setNotes]  = useState([]);

  const addNote = (note) => {
    setNotes((prevNotes) => {
      return [...prevNotes, note];
    });
  }

  const onDelete = (id) => {
    setNotes((prevNotes) => {
      return prevNotes.filter((note, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className="App">
      <Header />
      <CreateArea
        onAdd={addNote}
      />
      {notes.map((note, index) => (
          <Note
            id={index}
            key={index + 1}
            title={note.title}
            content={note.content}
            onDelete={onDelete}
          />
      ))}
      
      <Footer />
    </div>
  
  );
}

export default App;
