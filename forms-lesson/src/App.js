import React from 'react';
import logo from './logo.svg';
import './App.css';
import SignupForm from './components/SignupForm'

function App() {
  
  const addPerson = (newPerson) => {
    console.log(`The new person is ${newPerson.firstName} ${newPerson.lastName}. Their e-mail address is ${newPerson.email}.`)
  }


  return (
    <div className="App">
      <header className="App-header">
        <SignupForm newPersonCallback={addPerson}/>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
