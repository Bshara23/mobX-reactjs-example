import React, { Component } from "react";
import { useObserver } from "mobx-react";
import { Store } from "../data/mobx";

const BugsHeader = () => {
  const store = Store();
  return useObserver(() => <h1>{store.bugsCount} Notes:</h1>);
};

const BugsList = () => {
  const store = Store();

  return useObserver(() => (
    <ul>
      {store.notes.map((note) => (
        <li key={note}>{note}</li>
      ))}
    </ul>
  ));
};

const BugsForm = () => {
  const store = Store();
  const [note, setNote] = React.useState("");

  return (
    <form
      onSubmit={(e) => {
        store.addNote(note);
        setNote("");
        e.preventDefault();
      }}
    >
      <input
        type="text"
        value={note}
        onChange={(e) => {
          setNote(e.target.value);
        }}
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default class Notes extends Component {
  render() {
    return (
      <main>
        <BugsHeader />
        <BugsList />
        <BugsForm />
      </main>
    );
  }
}
