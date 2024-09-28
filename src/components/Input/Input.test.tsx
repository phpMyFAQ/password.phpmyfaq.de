// Input.test.tsx
import React, { useState } from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Input } from './Input';

describe('Input Component', () => {
    test('renders the input with the correct label', () => {
        render(<Input label="Username" value="" name="username" onChange={() => {}} />);
        expect(screen.getByLabelText('Username')).toBeInTheDocument();
    });

    test('renders the input with the correct value', () => {
        render(<Input label="Username" value="JohnDoe" name="username" onChange={() => {}} />);
        expect(screen.getByLabelText('Username')).toHaveValue('JohnDoe');
    });

    test('calls onChange handler when typing', () => {
        const TestComponent = () => {
            const [inputValue, setInputValue] = useState('');
            const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
                setInputValue(e.target.value);
            };

            return <Input label="Username" value={inputValue} name="username" onChange={handleChange} />;
        };

        render(<TestComponent />);
        fireEvent.change(screen.getByLabelText('Username'), { target: { value: 'JohnDoe' } });
        expect(screen.getByLabelText('Username')).toHaveValue('JohnDoe');
    });

    test('renders required attribute when provided', () => {
        render(<Input label="Username" value="" name="username" onChange={() => {}} required />);
        expect(screen.getByLabelText('Username')).toBeRequired();
    });
});
