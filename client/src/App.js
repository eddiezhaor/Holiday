import React, { Component } from "react";
import Chatbox from "./components/Chatbox"

// import Result from "./components/pages/Result"
//  other static components go here too
import "./App.css";



class App extends Component {
  render() {
    return (
      <div>
      <Chatbox></Chatbox>
      </div>
    );
  }
}

export default App;
