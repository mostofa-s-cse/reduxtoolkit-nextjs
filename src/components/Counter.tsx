'use client'
import React, { useState } from 'react';
import Button from "@/components/Button";
import Count from "@/components/Count";

const Counter = () => {
    const [count, setCount] = useState(0);

    const handleIncrement = () => {
        setCount(prevCount => prevCount + 1);
    };

    const handleDecrement = () => {
        setCount(prevCount => prevCount - 1);
    };

    return (
        <div className="card py-3 w-1/3 bg-white mx-auto text-center shadow my-4">
            <Count count={count}/>
            <div className="mx-auto mt-5 flex justify-center gap-3">
                <Button handler={handleIncrement}>Increment</Button>
                <Button type="danger" handler={handleDecrement}>Decrement</Button>
            </div>
        </div>
    );
};

export default Counter;
