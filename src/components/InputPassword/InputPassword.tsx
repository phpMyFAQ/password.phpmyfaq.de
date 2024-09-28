import React, { ChangeEvent } from 'react';

interface InputPasswordProps {
    label: string;
    value: string;
    name: string;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
    required?: boolean;
}

export const InputPassword: React.FC<InputPasswordProps> = ({ label, value, name, onChange, required }) => {
    return (
        <div className="form-group">
            <label className="form-label" htmlFor={name}>{label}</label> {/* Add Bootstrap form-label class */}
            <input
                id={name}
                className="form-control"
                type="password"
                name={name}
                value={value}
                onChange={onChange}
                required={required}
            />
        </div>
    );
};
