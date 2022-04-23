import React, { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [height, setHeight] = useState(0);
  const [superPower, setSuperPower] = useState("");

  return (
    <div className="App">
      <h1>Build A Hero</h1>
      <label htmlFor="">Name: </label>
      <input
        type="text"
        style={{ margin: 10 }}
        onChange={(event) => {
          setName(event.target.value);
        }}
      />
      <label htmlFor="">Age: </label>
      <input
        type="number"
        style={{ margin: 10 }}
        onChange={(event) => {
          setAge(event.target.value);
        }}
      />
      <label htmlFor="">Height: </label>
      <input
        type="number"
        style={{ margin: 10 }}
        onChange={(event) => {
          setHeight(event.target.value);
        }}
      />
      <label htmlFor="">SuperPower: </label>
      <input
        type="text"
        style={{ margin: 10 }}
        onChange={(event) => {
          setSuperPower(event.target.value);
        }}
      />

      {name}
      {age}
      {height}
      {superPower}
    </div>
  );
}

export default App;
