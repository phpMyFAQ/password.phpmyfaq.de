import React from 'react';
import './InputReadonly.css';

interface InputReadonlyProps {
    label: string;
    value: string;
}

export const InputReadonly: React.FC<InputReadonlyProps> = ({ label, value }) => {
    return (
        <div className="form-group">
            <label className="form-label">{label}</label> {/* Add Bootstrap form-label class */}
            <input
                className="form-control"
                type="text"
                value={value}
                readOnly
            />
        </div>
    );
};
