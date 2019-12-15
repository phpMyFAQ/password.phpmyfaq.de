import React, { ChangeEvent, FormEvent, useState } from 'react';
import './App.css';
import Input from './Input/Input';
import InputPassword from './InputPassword/InputPassword';
import Button from './Button/Button';
import generateHash from '../services/generateHash';

function App() {
  const [ salt, setSalt ] = useState('');
  const [ userName, setUserName ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ generatedHash, setGeneratedHash ] = useState();

  const handleSaltChange = (event: ChangeEvent<HTMLInputElement>) => setSalt(event.target.value);
  const handleUserNameChange = (event: ChangeEvent<HTMLInputElement>) => setUserName(event.target.value);
  const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => setPassword(event.target.value);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const hash = generateHash(userName, password, salt);
    setGeneratedHash(hash)
  };

  return <div className="App container">
    <header className="app-header">
      <img src="./logo.png" className="phpmyfaq-logo" alt="phpMyFAQ Logo" />
      <h1>
        Password Hash Generator Tool
      </h1>
    </header>
    <div className="row justify-content-md-center">
      <div className="col-6">
        <form onSubmit={handleSubmit}>
            <Input label={'Your phpMyFAQ Salt'} onChange={handleSaltChange}/>
            <Input label={'Username'} onChange={handleUserNameChange}/>
            <InputPassword label={'Password'} onChange={handlePasswordChange}/>
            <Button>Generate hash!</Button>
        </form>
      </div>
    </div>

    <div className="row justify-content-md-center">
      <div className="col-6">
        {generatedHash && <div className="generated-hash">{generatedHash}</div>}
      </div>
    </div>
  </div>;
}

export default App;
