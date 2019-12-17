import React from 'react';

export enum ButtonType {
  BUTTON = 'button',
  SUBMIT = 'submit'
}

interface ButtonProps {
  type: ButtonType;
  children: string;
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
}

function Button({ type, children, onClick }: ButtonProps) {
  return <>
    <button
      className="btn btn-primary btn-lg btn-block"
      onClick={onClick}
      typeof={type}
    >
      {children}
    </button>
    </>;
}

export default Button;