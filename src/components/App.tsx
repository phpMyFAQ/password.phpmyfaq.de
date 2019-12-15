import React from 'react';
import './App.css';
import Input from './Input/Input';
import InputPassword from './InputPassword/InputPassword';
import Button from './Button/Button';

function App() {
  return <div className="App container">
    <header className="App-header">
      <img src="./logo.png" className="phpmyfaq-logo" alt="phpMyFAQ Logo" />
      <h1>
        Password Hash Generator Tool
      </h1>
    </header>
    <div className="row justify-content-md-center">
      <div className="col-6">
        <form>
            <Input label={'Your phpMyFAQ Salt'}/>
            <Input label={'Username'}/>
            <InputPassword label={'Password'}/>
            <Button>Generate hash!</Button>
        </form>
      </div>
    </div>
  </div>;
}

export default App;
