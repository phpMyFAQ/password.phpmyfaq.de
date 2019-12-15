import React from 'react';

interface ButtonProps {
  children: string;
}

function Button({ children }: ButtonProps) {
  return <>
    <button
      className="btn btn-primary btn-lg btn-block"
      type="submit"
    >
      {children}
    </button>
    </>;
}

export default Button;