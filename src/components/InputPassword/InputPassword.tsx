import React, { ChangeEvent, useState } from 'react';

interface InputPasswordProps {
  label: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

function InputPassword({ label, onChange }: InputPasswordProps) {
  const [ password, setPassword ] = useState('');
  const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
    onChange(event);
  };
  return <div className="form-group">
    <label>{label}</label>
      <input
        className={'form-control form-control-lg'}
        type="password"
        autoComplete="off"
        required={true}
        value={password}
        onChange={handlePasswordChange}
      />
  </div>
};

export default InputPassword;