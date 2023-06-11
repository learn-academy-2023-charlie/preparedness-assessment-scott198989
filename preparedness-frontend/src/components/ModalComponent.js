import React from 'react'; // standard import for react component 
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
//Psuedocode: Using reactstrap, to import the specific modal requested this is the import needed, and it comes from reactstrap.The two props in this function (isOpen, toggle) are what is allowing the modal to appear. The isOpen prop controls the visability of the modal, while toggle shuts the modal down when the user clicks outside the modal, it updates the state of the parent component, and the userName is to display the customer greeting when the modal appears. The lorem ispom is wrapped in the ModalBody tag to act as its container.  

const ModalComponent = ({ isOpen, toggle, userName }) => { 
  return (
    <div>
      <Modal isOpen={isOpen} toggle={toggle}> 
        <ModalHeader toggle={toggle}>Hello, {userName}!</ModalHeader>
        <ModalBody>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum.
        </ModalBody>
      </Modal>
    </div>
  );
};

export default ModalComponent;
