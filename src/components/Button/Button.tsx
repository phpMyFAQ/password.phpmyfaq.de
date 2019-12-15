import React, { MouseEvent } from 'react';

interface ButtonProps {
  children: string;
}

function Button({ children }: ButtonProps) {

  const submit = (event: MouseEvent) => {
    event.preventDefault();
    console.log('click: ', event);
  };

  return <>
    <button
      className="btn btn-primary btn-lg btn-block"
      type="submit"
      onClick={submit}
    >
      {children}
    </button>
    </>;
}

export default Button;