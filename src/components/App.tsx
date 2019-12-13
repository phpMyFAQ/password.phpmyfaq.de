import React from 'react';
import './App.css';
import Input from './Input/Input';
import InputPassword from './InputPassword/InputPassword';

function App() {
  return <div className="App container">
    <header className="App-header">
      <img src="./logo.png" className="phpmyfaq-logo" alt="phpMyFAQ Logo" />
      <h1>
        Password Hash Generator Tool
      </h1>
    </header>
    <div className="row">
      <div className="col-12">
        <form>
          <div className="form-group">
            <Input label={'phpMyFAQ Salt'}/>
            <Input label={'Username'}/>
            <InputPassword label={'Password'}/>
          </div>
        </form>
      </div>
    </div>
  </div>;
}

export default App;
