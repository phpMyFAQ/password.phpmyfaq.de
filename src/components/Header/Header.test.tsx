import { render, screen } from '@testing-library/react';
import { Header } from './Header';

describe('Header Component', () => {
    test('renders the title heading', () => {
        render(<Header title="Hello World" />);
        expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Hello World');
    });

    test('renders the logo with alt text', () => {
        render(<Header title="x" />);
        const img = screen.getByAltText('phpMyFAQ logo');
        expect(img).toBeInTheDocument();
        expect(img).toHaveAttribute('src', './logo.png');
    });
});
