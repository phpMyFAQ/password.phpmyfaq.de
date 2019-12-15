import React, { ChangeEvent, useState } from 'react';
import './Input.css';

interface InputProps {
  label: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

function Input({ label, onChange }: InputProps) {
  const [ value, setValue ] = useState('');
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    onChange(event);
  };

  return <div className="form-group">
      <label>{label}</label>
      <input
        className={'form-control form-control-lg'}
        type="text"
        autoComplete="off"
        required={true}
        value={value}
        onChange={handleInputChange}
      />
    </div>
};

export default Input;