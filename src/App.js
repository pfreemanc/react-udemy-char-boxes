import React, { Component } from "react";
import './App.css';
import Char from "./Components/Char";
import Validation from "./Components/Validation";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      userInput: "",
    };
  }

  // sets state as the input is updated
  inputChangeHandler = (event) => {
    this.setState({ userInput: event.target.value });
  };

  // deletes a char box as the user clicks on it
  deleteCharHandler = (index) => {
    const text = this.state.userInput.split(""); // convert state string to an array
    text.splice(index, 1); // removing the clicked char usingt he index 
    const updatedText = text.join(""); // converting back to a string
    this.setState({ userInput: updatedText }); // updating state so the changes are reflected 
  };

  render() {

    // converts userInput to an array, maps through, returns a char component for each char. 
    const charList = this.state.userInput.split("").map((char, index) => {
      return (
        <Char
          character={char}
          key={index}
          onClick={() => this.deleteCharHandler(index)}
        />
      );
    });

    return (
      <div className="App">
        <h1>Let's Check Our Text!</h1>
        <input
          type="text"
          onChange={(event) => this.inputChangeHandler(event)}
          value={this.state.userInput}
        />
        <Validation textLength={this.state.userInput.length} />
        {charList}
      </div>
    );
  }
}
