import React from "react";
import "./styles.css";
import withHoc from "./child";
import Comp from "./comp1";

const ChildComp = withHoc("key", window.localStorage)(Comp);

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      inputValue: localStorage.getItem("inputValue") || ""
    };
  }

  render() {
    return (
      <div className="App">
        <ChildComp />
      </div>
    );
  }
}
