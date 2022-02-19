import { FunctionComponent } from 'react';
import './Header.css';

interface HeaderProps {
  title: string;
}

export const Header: FunctionComponent<HeaderProps> = ({ title }) => {
  return <>
    <header className="app-header">
      <img src="./logo.png" className="phpmyfaq-logo" alt="phpMyFAQ Logo"/>
      <h1 className="text-center">
        {title}
      </h1>
    </header>
  </>;
}
