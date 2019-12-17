import React from 'react';
import './Header.css';

function Header() {
  return <>
    <header className="app-header">
      <img src="./logo.png" className="phpmyfaq-logo" alt="phpMyFAQ Logo"/>
      <h1 className="text-center">
        Password Hash Generator Tool
      </h1>
    </header>
  </>;
}

export default Header;