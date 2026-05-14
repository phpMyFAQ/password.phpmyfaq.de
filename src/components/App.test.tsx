import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { vi } from 'vitest';
import { App } from './App';

describe('App Component', () => {
    test('renders the main heading', () => {
        render(<App />);
        expect(screen.getByRole('heading', { name: /Password Hash Generator Tool for phpMyFAQ/i })).toBeInTheDocument();
    });

    test('renders all three input fields and the submit button', () => {
        render(<App />);
        expect(screen.getByLabelText('Your phpMyFAQ Salt')).toBeInTheDocument();
        expect(screen.getByLabelText('Your Username')).toBeInTheDocument();
        expect(screen.getByLabelText('New Password')).toBeInTheDocument();
        expect(screen.getByRole('button', { name: /Generate hash!/i })).toBeInTheDocument();
    });

    test('shows validation toast when submitting with empty fields', async () => {
        render(<App />);
        const form = screen.getByRole('button', { name: /Generate hash!/i }).closest('form')!;
        fireEvent.submit(form);
        await waitFor(() => {
            expect(screen.getByText(/Please fill in all fields\./i)).toBeInTheDocument();
        });
    });

    test('generates and displays a hash when all fields are filled', async () => {
        const user = userEvent.setup();
        render(<App />);

        await user.type(screen.getByLabelText('Your phpMyFAQ Salt'), 'baz');
        await user.type(screen.getByLabelText('Your Username'), 'foo');
        await user.type(screen.getByLabelText('New Password'), 'bar');

        const form = screen.getByRole('button', { name: /Generate hash!/i }).closest('form')!;
        fireEvent.submit(form);

        const expectedHash = '130b02b90cf45e7f465c717196aa4f706ab7a52901d22384d0b0562ca668598d';
        await waitFor(() => {
            expect(screen.getByDisplayValue(expectedHash)).toBeInTheDocument();
        });
        expect(screen.getByRole('button', { name: /Copy to clipboard/i })).toBeInTheDocument();
    });

    test('copies the generated hash to the clipboard', async () => {
        const user = userEvent.setup();
        render(<App />);

        await user.type(screen.getByLabelText('Your phpMyFAQ Salt'), 'baz');
        await user.type(screen.getByLabelText('Your Username'), 'foo');
        await user.type(screen.getByLabelText('New Password'), 'bar');

        const form = screen.getByRole('button', { name: /Generate hash!/i }).closest('form')!;
        fireEvent.submit(form);

        const expectedHash = '130b02b90cf45e7f465c717196aa4f706ab7a52901d22384d0b0562ca668598d';
        await waitFor(() => {
            expect(screen.getByDisplayValue(expectedHash)).toBeInTheDocument();
        });

        const writeText = vi.fn().mockResolvedValue(undefined);
        Object.defineProperty(navigator, 'clipboard', {
            value: { writeText },
            configurable: true,
        });

        fireEvent.click(screen.getByRole('button', { name: /Copy to clipboard/i }));
        await waitFor(() => {
            expect(writeText).toHaveBeenCalledWith(expectedHash);
        });
    });
});
