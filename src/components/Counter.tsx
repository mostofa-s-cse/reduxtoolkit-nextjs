'use client'
import React, { useState } from 'react';
import Button from "@/components/Button";
import Count from "@/components/Count";

const Counter = ({count,onIncrement,onDecrement}) => {
    return (
        <div className="card py-3 w-1/3 bg-white mx-auto text-center shadow my-4">
            <Count count={count}/>
            <div className="mx-auto mt-5 flex justify-center gap-3">
                <Button handler={onIncrement}>Increment</Button>
                <Button type="danger" handler={onDecrement}>Decrement</Button>
            </div>
        </div>
    );
};

export default Counter;
