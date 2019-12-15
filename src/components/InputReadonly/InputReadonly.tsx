import React, { useState } from 'react';
import './InputReadonly.css';

interface InputReadonlyProps {
  label: string;
  value: string;
}

function InputReadonly({ label, value: InputValue }: InputReadonlyProps) {
  const [ value, setValue ] = useState(InputValue);

  return <div className="form-group generated-hash">
    <label>{label}</label>
    <input
      className={'form-control'}
      type="text"
      autoComplete="off"
      readOnly={true}
      value={value}
    />
  </div>
};

export default InputReadonly;