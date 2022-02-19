import { ChangeEvent, FormEvent, FunctionComponent, useState } from 'react';
import Toast from 'react-bootstrap/Toast';
import CopyToClipboard from 'react-copy-to-clipboard';

import { Header } from './Header/Header';
import { Input } from './Input/Input';
import { InputPassword } from './InputPassword/InputPassword';
import { Button, ButtonType } from './Button/Button';
import { generateHash } from '../services/generateHash';
import { InputReadonly } from './InputReadonly/InputReadonly';
import { Footer } from './Footer/Footer';

export const App: FunctionComponent = () => {
  const title = 'Password Hash Generator Tool';

  const [ salt, setSalt ] = useState('');
  const [ userName, setUserName ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ generatedHash, setGeneratedHash ] = useState('');
  const [ showToast, setShowToast] = useState(false);

  const handleSaltChange = (event: ChangeEvent<HTMLInputElement>) => setSalt(event.target.value);
  const handleUserNameChange = (event: ChangeEvent<HTMLInputElement>) => setUserName(event.target.value);
  const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => setPassword(event.target.value);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const hash = generateHash(userName, password, salt);
    setGeneratedHash(hash)
  };

  return <>
    <div className="position-absolute w-100 d-flex flex-column p-4">
      <Toast onClose={() => setShowToast(false)} show={showToast} delay={3000} style={{
        position: 'absolute',
        top: '1em',
        right: '1em',
      }} autohide>
        <Toast.Header>
          <strong className="mr-auto">{title}</strong>
        </Toast.Header>
        <Toast.Body>Generated hash successfully copied to clipboard!</Toast.Body>
      </Toast>
    </div>
    <div className="App container">
      <Header title={title}/>
      <div className="row justify-content-md-center">
        <div className="col-lg-6 col-sm-12">
          <form onSubmit={handleSubmit}>
            <Input label={'Your phpMyFAQ Salt'} onChange={handleSaltChange}/>
            <Input label={'Your Username'} onChange={handleUserNameChange}/>
            <InputPassword label={'New Password'} onChange={handlePasswordChange}/>
            <Button type={ButtonType.SUBMIT}>Generate hash!</Button>
            {
              generatedHash &&
              <div>
                <InputReadonly label={'Generated Hash'} value={generatedHash}/>
                <CopyToClipboard text={generatedHash} onCopy={() => setShowToast(true)}>
                  <Button type={ButtonType.BUTTON}>Copy to clipboard</Button>
                </CopyToClipboard>
              </div>
            }
          </form>
        </div>
      </div>
      <Footer/>
    </div>
  </>;
}
