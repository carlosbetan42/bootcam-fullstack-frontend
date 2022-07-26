import { useState } from "react";
import "./App.css";
import { Note } from "./Note";

const App = (props) => {
  const [notes, setNotes] = useState(props.notes);
  const [newNote, setNewNote] = useState("");
  const [showAll, setShowAll] = useState(true);

  const handleChange = (event) => {
    setNewNote(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const newToAddToState = {
      id: notes.length + 1,
      content: newNote,
      date: new Date().toISOString(),
      important: Math.random() < 0.5,
    };
    setNotes([...notes, newToAddToState]);
    setNewNote("");
  };

  const handleShowAll = () => {
    setShowAll(() => !showAll);
  };

  return (
    <div>
      <h1>Notes</h1>
      <button onClick={handleShowAll}>{showAll ? "Show only important" : "Show all"}</button>
      <ul>
        {notes
          .filter((note) => {
            if (showAll === true) return true;
            return note.important === true;
          })
          .map((note) => (
            <Note key={note.id} {...note} />
          ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <input type='text' value={newNote} onChange={handleChange} />
        <button>Crear nota</button>
      </form>
    </div>
  );
};
export default App;
