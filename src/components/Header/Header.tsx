import React from 'react';
import './Header.css';

interface HeaderProps {
    title: string;
}

export const Header: React.FC<HeaderProps> = ({ title }) => {
    return (
        <header className="app-header">
            <img src="./logo.png" className="phpmyfaq-logo" alt="phpMyFAQ company logo" />
            <h1 className="text-center">
                {title}
            </h1>
        </header>
    );
};
