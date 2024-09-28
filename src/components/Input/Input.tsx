import React, { ChangeEvent } from 'react';
import './Input.css';

interface InputProps {
    label: string;
    value: string;
    name: string;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
    required?: boolean;
}

export const Input: React.FC<InputProps> = ({ label, value, name, onChange, required }) => {
    return (
        <div className="form-group mb-4">
            <label className="form-label" htmlFor={name}>{label}</label>
            <input
                id={name}
                className="form-control"
                type="text"
                name={name}
                value={value}
                onChange={onChange}
                required={required}
            />
        </div>
    );
};
