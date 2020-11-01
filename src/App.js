import React, { Component } from "react";

import "./App.css";
import Todo from "./components/Todo";
import Notes from "./components/Notes";
import { StoreProvider } from "./data/mobx";

export default class componentName extends Component {
  render() {
    return (
      <StoreProvider>
        <Notes />
      </StoreProvider>
    );
  }
}
