import React from 'react';

export const Footer: React.FC = () => {
    return (
        <footer className="my-2 pt-2 text-white text-center text-small">
            Made with <span role="img" aria-label="heart">❤</span> and <span role="img" aria-label="coffee">☕️</span>
            <br />
            <span role="img" aria-label="copyright">©</span> 2019 - 2024
            <a target="_blank" rel="noreferrer" href="https://www.rinne.info/">
                Thorsten Rinne
            </a>
        </footer>
    );
};