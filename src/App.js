import React, { useState } from 'react';
import './App.css';

function App() {
  const [name, setName] = useState("JOHN");

  const changeName = () => {
    setName("Jake");
  }
  return (
    <div className="App">
      <h1>Build A Hero</h1>
      <label htmlFor="">Name: </label>
      <input type="text" style={{ margin: 10 }} />
      <label htmlFor="">Age: </label>
      <input type="number" style={{ margin: 10 }} />
      <label htmlFor="">Height: </label>
      <input type="text" style={{ margin: 10 }} />
      <label htmlFor="">SuperPower: </label>
      <input type="text" style={{ margin: 10 }} />

      <button onClick={changeName} >Change Name</button>
      {name}
    </div>
  );
}

export default App;
