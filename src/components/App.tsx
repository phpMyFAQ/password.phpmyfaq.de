import React, { ChangeEvent, FormEvent, useState } from 'react';
import Toast from 'react-bootstrap/Toast';
import CopyToClipboard from 'react-copy-to-clipboard';

import { Header } from './Header/Header';
import { Input } from './Input/Input';
import { InputPassword } from './InputPassword/InputPassword';
import { Button, ButtonType } from './Button/Button';
import { generateHash } from '../services/generateHash';
import { InputReadonly } from './InputReadonly/InputReadonly';
import { Footer } from './Footer/Footer';

export const App: React.FC = () => {
    const title = 'Password Hash Generator Tool for phpMyFAQ';

    const [formData, setFormData] = useState({
        salt: '',
        userName: '',
        password: '',
        generatedHash: '',
    });
    const [showToast, setShowToast] = useState(false);
    const [toastMessage, setToastMessage] = useState('');

    // Handle input change
    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    // Handle form submit
    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const { userName, password, salt } = formData;

        if (!userName || !password || !salt) {
            setToastMessage('Please fill in all fields.');
            setShowToast(true);
            return;
        }

        const hash = generateHash(userName, password, salt);
        setFormData((prevData) => ({
            ...prevData,
            generatedHash: hash,
        }));
        setToastMessage('Hash generated successfully!');
        setShowToast(true);
    };

    const { salt, userName, password, generatedHash } = formData;

    return (
        <>
            {/* Toast Notification */}
            <div className="position-absolute w-100 d-flex flex-column p-4">
                <Toast
                    onClose={() => setShowToast(false)}
                    show={showToast}
                    delay={3000}
                    autohide
                    style={{
                        position: 'absolute',
                        top: '1em',
                        right: '1em',
                    }}
                >
                    <Toast.Header>
                        <strong className="mr-auto">{title}</strong>
                    </Toast.Header>
                    <Toast.Body>{toastMessage}</Toast.Body>
                </Toast>
            </div>

            {/* Main Content */}
            <div className="App container">
                <Header title={title} />
                <div className="row justify-content-md-center">
                    <div className="col-lg-6 col-sm-12">
                        <form onSubmit={handleSubmit}>
                            <Input label="Your phpMyFAQ Salt" onChange={handleInputChange} value={salt} name="salt" required />
                            <Input label="Your Username" onChange={handleInputChange} value={userName} name="userName" required />
                            <InputPassword label="New Password" onChange={handleInputChange} value={password} name="password" required />
                            <Button type={ButtonType.SUBMIT}>Generate hash!</Button>

                            {generatedHash && (
                                <div class="mt-4">
                                    <InputReadonly label="Generated Hash" value={generatedHash} />
                                    <CopyToClipboard text={generatedHash} onCopy={() => setToastMessage('Generated hash successfully copied to clipboard!')}>
                                        <Button type={ButtonType.BUTTON}>Copy to clipboard</Button>
                                    </CopyToClipboard>
                                </div>
                            )}
                        </form>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
};
