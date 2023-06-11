import React, { useState } from 'react';
import { Button, Input, Label } from 'reactstrap';
import ModalComponent from './components/ModalComponent';
import './App.css';

//Psuedocode: Above are the necessary dependencies imported. The main function living on this page, App, has two sets of state being utilized.  The first set of state deals with the Modal and it is set to false so that the only time the modal will appear is when an event listener is triggered, which would be the click of a button.  The second set of state deals with the user name, which is set to an empty object with a property called name allowing the user to input a name.  The handleChange is a event listener that is waiting for interaction with the user, when the user modifies this area the function is called, i.e. entering in a name.  inside the function I used the spread operator to copy the username object.  When the user enters a name, the object is updated to reflect it.  In a nutshell, when you enter a name in the input field the userName object stores that name and passes it to the modal component for the custom greeting.  The handleClickModal is set to true so that the modal component (ModalComponent) will be displayed because the isOpen prop of the modal component is connected to the prepModal state. When prepModal is true, the modal is shown; when prepModal is false, the modal is hidden.  The handleReset is set to false so that it only resets when the user clicks the button, and once that is triggered, it will set the object that currently holds the users name to be a empty obejct again.  I also did some inline styling to set the color of the buttons to #0dcaf0 and the text to white because for some reason i was not able to do that in css.  I will look into it, I should have been able to, it might be how I have my class set up in JSX.  



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
      <h1 className="header">Preparedness Assessment</h1>
      <div className="form">
        <div className="input">
          <Label for="name">Enter your name</Label>
          <Input type="text" name="name" onChange={handleChange} value={userName.name} />
        </div>
        <div className="btns">
  <button onClick={handleClickModal} style={{ backgroundColor: '#0dcaf0', color: 'white' }}>Click Me</button>
  <button onClick={handleReset} style={{ backgroundColor: '#0dcaf0', color: 'white' }}>Reset</button>
  <ModalComponent isOpen={prepModal} toggle={() => setPrepModal(!prepModal)} userName={userName.name} />
</div>

    </div>
    </div>
  );
};

export default App;
