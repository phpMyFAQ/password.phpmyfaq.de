import React from 'react';

export enum ButtonType {
    BUTTON = 'button',
    SUBMIT = 'submit'
}

interface ButtonProps {
    type: ButtonType;
    children: React.ReactNode;
    onClick?: (event: React.MouseEvent<HTMLElement>) => void;
}

export const Button: React.FC<ButtonProps> = ({ type, children, onClick }) => {
    return (
        <button
            className="btn btn-primary btn-lg btn-block mt-4"
            onClick={onClick}
            type={type} // Fixed the attribute name
        >
            {children}
        </button>
    );
};
