import React from 'react';

interface InputPasswordProps {
  label: string;

}

function InputPassword({ label }: InputPasswordProps) {
  return <div className="form-group">
    <label>{label}</label>
      <input
        className={'form-control form-control-lg'}
        type="password"
        autoComplete="off"
      />
  </div>
};

export default InputPassword;