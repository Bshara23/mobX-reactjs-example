import React from "react";
import { useLocalStore, useObserver } from "mobx-react";

export const StoreContext = React.createContext();
export const Store = () => {
  return React.useContext(StoreContext);
};
export const StoreProvider = ({ children }) => {
  const store = useLocalStore(() => ({
    bugs: ["Centipe222de"],
    notes: [],
    addNote: (note) => {
      store.notes.push(note);
    },
    addBug: (bug) => {
      store.bugs.push(bug);
    },
    get bugsCount() {
      return store.bugs.length;
    },
  }));

  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
};
