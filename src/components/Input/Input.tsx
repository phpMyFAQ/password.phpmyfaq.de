import React from 'react';

interface InputProps {
  label: string;

}

function Input({ label }: InputProps) {
  return <>
      <input
        className={'form-control form-control-lg'}
        type="text"
        placeholder={label}
        autoComplete="off"
      />
    </>
};

export default Input;