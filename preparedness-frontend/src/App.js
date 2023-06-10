import React, { useState } from 'react';
import { Button, Input, Label } from 'reactstrap';
import ModalComponent from './components/ModalComponent';
import './App.css';

const App = () => {
  const [prepModal, setPrepModal] = useState(false);
  const [userName, setUserName] = useState({
    name: '',
  });

  const handleChange = (e) => {
    setUserName({ ...userName, [e.target.name]: e.target.value });
  };

  const handleClickModal = () => {
    setPrepModal(true);
  };

  const handleReset = () => {
    setUserName({ name: '' });
    setPrepModal(false);
  };

  return (
    <div className="entire-content">
      <h1>Preparedness Assessment</h1>
      <div className="form">
        <div className="input">
          <Label for="name">Enter your name</Label>
          <Input type="text" name="name" onChange={handleChange} value={userName.name} />
        </div>
        <Button onClick={handleClickModal}>Click Me</Button>
        <Button onClick={handleReset}>Reset</Button>
        <ModalComponent isOpen={prepModal} toggle={() => setPrepModal(!prepModal)} userName={userName.name} />
      </div>
    </div>
  );
};

export default App;
