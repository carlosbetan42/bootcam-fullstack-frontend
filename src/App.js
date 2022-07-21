import { useState, useEffect } from "react";
// import axios from "axios";
import { Note } from "./Note";
import "./App.css";
import { create as createNote, getAll as getAllNotes } from "./services/notes";
// import { getAllNotes } from "./services/notes/getAllNotes";
// import { createNote } from "./services/notes/createNote";

const App = () => {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading(true);

    getAllNotes().then(notesData => {
      setNotes(notesData);
      setLoading(false);
    });

    return () => {
    };
    //setTimeout(() => {
    // fetch("https://jsonplaceholder.typicode.com/posts")
    //   .then(response => response.json())
    //   .then(json => {
    //     setNotes(json);
    //     setLoading(false);
    //   });
    // axios.get("https://jsonplaceholder.typicode.com/posts").then(response => {
    //   const { data } = response;
    //   setNotes(data);
    //   setLoading(false);
    // });

    //}, 2000);

  }, [newNote]);

  const handleChange = (event) => {
    setNewNote(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const newToAddToState = {
      content: newNote,
      title: newNote,
      userId: 10
    };

    // axios.post("https://jsonplaceholder.typicode.com/posts", newToAddToState)
    //   .then(response => {
    //     console.log(response.data);
    //     setNotes([...notes, response.data]);
    //     setNewNote("");
    //   }).catch(e => { });

    setError("");

    createNote(newToAddToState).then(newNote => {
      setNotes([...notes, newNote]);
      setNewNote("");
    }).catch(e => {
      setError("El api ha fallado")
    });
  };

  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {notes
          .map((note) => (
            <Note key={note.id} {...note} />
          ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <input type='text' value={newNote} onChange={handleChange} />
        <button>Crear nota</button>
      </form>
      {error ? <span style={{ color: "red" }}>{error}</span> : ''}
    </div>
  );
};
export default App;
