import React from "react";
import { useObserver } from "mobx-react";
import { Store } from "../data/mobx";

const BugsHeader = () => {
  const store = Store();
  return useObserver(() => <h1>{store.bugsCount} Bugs!</h1>);
};

const BugsList = () => {
  const store = Store();

  return useObserver(() => (
    <ul>
      {store.bugs.map((bug) => (
        <li key={bug}>{bug}</li>
      ))}
    </ul>
  ));
};

const BugsForm = () => {
  const store = Store();
  const [bug, setBug] = React.useState("");

  return (
    <form
      onSubmit={(e) => {
        store.addBug(bug);
        setBug("");
        e.preventDefault();
      }}
    >
      <input
        type="text"
        value={bug}
        onChange={(e) => {
          setBug(e.target.value);
        }}
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default function App() {
  return (
    <main>
      <BugsHeader />
      <BugsList />
      <BugsForm />
    </main>
  );
}
