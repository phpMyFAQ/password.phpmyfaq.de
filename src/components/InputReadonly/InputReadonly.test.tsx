import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { InputReadonly } from './InputReadonly';

describe('InputReadonly Component', () => {
    test('renders the input with the correct label', () => {
        render(<InputReadonly label="Generated Hash" value="12345" />);
        expect(screen.getByText('Generated Hash')).toBeInTheDocument();
    });

    test('renders the input with the correct value', () => {
        render(<InputReadonly label="Generated Hash" value="abcde12345" />);
        expect(screen.getByDisplayValue('abcde12345')).toBeInTheDocument();
    });

    test('renders the input as readonly', () => {
        render(<InputReadonly label="Generated Hash" value="readonlyValue" />);
        const input = screen.getByDisplayValue('readonlyValue');
        expect(input).toHaveAttribute('readonly');
    });
});
