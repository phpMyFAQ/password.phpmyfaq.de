import React from 'react';
import './Input.css';

interface InputProps {
  label: string;

}

function Input({ label }: InputProps) {
  return <div className="form-group">
      <label>{label}</label>
      <input
        className={'form-control form-control-lg'}
        type="text"
        autoComplete="off"
      />
    </div>
};

export default Input;