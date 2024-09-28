import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Button, ButtonType } from './Button';

describe('Button Component', () => {
    test('renders the button with the correct text', () => {
        render(<Button type={ButtonType.BUTTON}>Click Me</Button>);
        expect(screen.getByRole('button')).toHaveTextContent('Click Me');
    });

    test('renders the button with the correct type attribute', () => {
        render(<Button type={ButtonType.SUBMIT}>Submit</Button>);
        expect(screen.getByRole('button')).toHaveAttribute('type', 'submit');
    });

    test('calls onClick handler when clicked', () => {
        const handleClick = jest.fn();
        render(<Button type={ButtonType.BUTTON} onClick={handleClick}>Click Me</Button>);
        fireEvent.click(screen.getByRole('button'));
        expect(handleClick).toHaveBeenCalledTimes(1);
    });

    test('does not call onClick when it is not provided', () => {
        render(<Button type={ButtonType.BUTTON}>Click Me</Button>);
        fireEvent.click(screen.getByRole('button'));
        expect(screen.getByRole('button')).toBeInTheDocument();
    });
});
