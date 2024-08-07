'use client'
import React from 'react';
import Button from "@/components/Home/Button";
import Count from "@/components/Home/Count";

// Define types for props
interface CounterProps {
    count: number;
    onIncrement: () => void;
    onDecrement: () => void;
    onReset: () => void;
}

const Counter: React.FC<CounterProps> = ({ count, onIncrement, onDecrement, onReset }) => {
    return (
        <div className="card py-3 bg-white mx-auto text-center shadow my-4">
            <Count count={count} />
            <div className="mx-auto mt-5 flex justify-center gap-3">
                <Button type="blue" handler={onIncrement}>Increment</Button>
                <Button type="red" handler={onDecrement}>Decrement</Button>
                <Button type="blue" handler={onReset}>Reset</Button>
            </div>
        </div>
    );
};

export default Counter;
