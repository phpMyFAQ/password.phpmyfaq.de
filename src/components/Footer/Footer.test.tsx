import { render, screen } from '@testing-library/react';
import { Footer } from './Footer';

describe('Footer Component', () => {
    test('renders the copyright year range', () => {
        render(<Footer />);
        expect(screen.getByText(/2019 - 2026/)).toBeInTheDocument();
    });

    test('renders the author link with correct href and target', () => {
        render(<Footer />);
        const link = screen.getByRole('link', { name: /Thorsten Rinne/ });
        expect(link).toHaveAttribute('href', 'https://www.rinne.info/');
        expect(link).toHaveAttribute('target', '_blank');
        expect(link).toHaveAttribute('rel', 'noreferrer');
    });

    test('renders accessible emoji labels', () => {
        render(<Footer />);
        expect(screen.getByLabelText('heart')).toBeInTheDocument();
        expect(screen.getByLabelText('coffee')).toBeInTheDocument();
        expect(screen.getByLabelText('copyright')).toBeInTheDocument();
    });
});
