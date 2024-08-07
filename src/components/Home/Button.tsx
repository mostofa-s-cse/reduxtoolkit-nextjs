import React from 'react';

interface ButtonProps {
    handler: () => void;
    type?: 'blue' | 'red'; // Correctly define button types as string literals
    children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ handler, type = 'blue', children }) => {
    // Determine the class based on the `type` prop
    const buttonClass = `p-2 text-center rounded ${
        type === 'blue'
            ? 'bg-blue-600 text-white'
            : type === 'red'
                ? 'bg-red-600 text-white'
                : 'bg-gray-600 text-white'
    }`;

    return (
        <button onClick={handler} className={buttonClass}>
            {children}
        </button>
    );
};

export default Button;
