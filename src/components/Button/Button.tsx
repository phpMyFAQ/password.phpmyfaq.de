import React, { FunctionComponent } from 'react';

export enum ButtonType {
  BUTTON = 'button',
  SUBMIT = 'submit'
}

interface ButtonProps {
  type: ButtonType;
  children: string;
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
}

export const Button: FunctionComponent<ButtonProps> = ({ type, children, onClick }) => {
  return <>
    <button
      className="btn btn-primary btn-lg btn-block mt-4"
      onClick={onClick}
      typeof={type}
    >
      {children}
    </button>
    </>;
}
