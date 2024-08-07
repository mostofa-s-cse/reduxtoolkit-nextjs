import React from 'react';

interface CountProps {
    count: number;
}

const Count: React.FC<CountProps> = ({ count }) => {
    return (
        <h2 className="text-2xl font-semibold">
            {count}
        </h2>
    );
};

export default Count;
