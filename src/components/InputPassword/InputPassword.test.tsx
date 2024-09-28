import React, { useState } from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { InputPassword } from './InputPassword';

describe('InputPassword Component', () => {
    test('renders the input with the correct label', () => {
        render(<InputPassword label="Password" value="" name="password" onChange={() => {}} />);
        expect(screen.getByLabelText('Password')).toBeInTheDocument();
    });

    test('renders the input with the correct value', () => {
        render(<InputPassword label="Password" value="secret123" name="password" onChange={() => {}} />);
        expect(screen.getByLabelText('Password')).toHaveValue('secret123');
    });

    test('calls onChange handler when typing', () => {
        const TestComponent = () => {
            const [inputValue, setInputValue] = useState('');
            const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
                setInputValue(e.target.value);
            };

            return <InputPassword label="Password" value={inputValue} name="password" onChange={handleChange} />;
        };

        render(<TestComponent />);
        fireEvent.change(screen.getByLabelText('Password'), { target: { value: 'secret123' } });
        expect(screen.getByLabelText('Password')).toHaveValue('secret123');
    });

    test('renders required attribute when provided', () => {
        render(<InputPassword label="Password" value="" name="password" onChange={() => {}} required />);
        expect(screen.getByLabelText('Password')).toBeRequired();
    });
});
