import React, { useState } from "react";
import { Button, Input, Label } from "reactstrap";
import ModalComponent from "./components/ModalComponent";
import "./App.css";

const App = () => {
  const [buttonClicked, setButtonClicked] = useState("");

  const handleClick = () => {
    setButtonClicked("clicked");
  };

  return (
    <div className="entire-content">
      <h1>Preparedness Assessment</h1>
      <div className="form">
        <div className="input">
          <Label for="name">Enter your name</Label>
          <Input />
        </div>
        <button onClick={handleClick}>Click Me</button>
        <Button>Reset</Button>
        <ModalComponent />
      </div>
    </div>
  );
};

export default App;
