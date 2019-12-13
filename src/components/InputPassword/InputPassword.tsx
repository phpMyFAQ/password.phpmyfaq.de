import React from 'react';

interface InputPasswordProps {
  label: string;

}

function InputPassword({ label }: InputPasswordProps) {
  return <>
    <input
      className={'form-control form-control-lg'}
      type="password"
      placeholder={label}
      autoComplete="off"
    />
  </>
};

export default InputPassword;