import React from 'react';
import './Header.css';

interface HeaderProps {
  title: string;
}

function Header({ title }: HeaderProps) {
  return <>
    <header className="app-header">
      <img src="./logo.png" className="phpmyfaq-logo" alt="phpMyFAQ Logo"/>
      <h1 className="text-center">
        {title}
      </h1>
    </header>
  </>;
}

export default Header;