import NoteCard from "./NoteCard";
import { useState } from "react";

const NoteGrid = () => {
  const [notes, setNotes] = useState([
    {
      id: 1,
      title: "My first note",
      body: "This is my first note!",
      createdAt: "2023-11-11T17:50:10.466Z",
    },
    {
      id: 2,
      title: "My second note",
      body: "This is my second note!",
      createdAt: "2023-11-11T17:50:10.466Z",
    },
    {
      id: 3,
      title: "My third note",
      body: "This is my third note!",
      createdAt: "2023-11-11T17:50:10.466Z",
    },
    {
      id: 4,
      title: "My fourth note",
      body: "This is my fourth note!",
      createdAt: "2023-11-11T17:50:10.466Z",
    },
    {
      id: 5,
      title: "My fifth note",
      body: "This is my fifth note!",
      createdAt: "2023-11-11T17:50:10.466Z",
    },
    {
      id: 6,
      title: "My sixth note",
      body: "This is my sixth note! and very long text to test the overflow if it works or not so we can see if it works or not ",
      createdAt: "2023-11-11T17:50:10.466Z",
    },
    {
      id: 7,
      title: "My seventh note",
      body: "This is my seventh note!",
      createdAt: "2023-11-11T17:50:10.466Z",
    },
  ]);

  const updateNote = (updatedNote) => {
    setNotes(
      notes.map((note) => (note.id === updatedNote.id ? updatedNote : note))
    );
  };

  return (
    <div className="grid grid-cols-5 gap-5 w-full h-full p-10">
      {notes.map((note) => (
        <NoteCard
          key={note.id}
          note={{ ...note, createdAt: new Date(note.createdAt) }}
          updateNote={updateNote}
        />
      ))}
    </div>
  );
};

export default NoteGrid;
