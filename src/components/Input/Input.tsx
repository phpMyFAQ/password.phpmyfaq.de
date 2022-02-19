import { ChangeEvent, FunctionComponent, useState } from 'react';
import './Input.css';

interface InputProps {
  label: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const Input: FunctionComponent<InputProps> = ({ label, onChange }) => {
  const [ value, setValue ] = useState('');
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    onChange(event);
  };

  return <div className="form-group">
      <label>{label}</label>
      <input
        className={'form-control form-control-lg mb-2'}
        type="text"
        autoComplete="off"
        required={true}
        value={value}
        onChange={handleInputChange}
      />
    </div>
};
