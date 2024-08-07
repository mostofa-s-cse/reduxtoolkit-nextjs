'use client';
import Counter from "@/components/Counter";
import Stats from "@/components/Stats";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, addCounter, resetCounter } from "@/redux/features/counters/countersSlice";

export default function Home() {
    const counters = useSelector(state => state.counters.counters);
    const dispatch = useDispatch();

    const totalCount = counters.reduce((sum, current) => sum + current.value, 0);

    const handleIncrement = (counterId) => {
        dispatch(increment(counterId));
    };

    const handleDecrement = (counterId) => {
        dispatch(decrement(counterId));
    };

    const handleAddCounter = () => {
        dispatch(addCounter());
    };

    const handleResetCounter = (counterId) => {
        dispatch(resetCounter(counterId));
    };

    return (
        <div>
            <div className="card py-3 w-1/3 bg-white mx-auto text-center shadow my-4">
            <h2 className="py-6 text-2xl font-semibold text-center">Simple Counter Application Using Redux Toolkit</h2>
            <button onClick={handleAddCounter} className="mb-4 p-2 text-center bg-blue-500 text-white rounded">Add Counter</button>
            {
                counters.map((counter) => (
                    <div key={counter.id}>
                        <Counter
                            count={counter.value}
                            onIncrement={() => handleIncrement(counter.id)}
                            onDecrement={() => handleDecrement(counter.id)}
                            onReset={()=>handleResetCounter(counter.id)}
                        />
                        {counter.message && <p className="text-center py-1 text-rose-900">{counter.message}</p>}
                    </div>
                ))
            }
            <Stats TotalCount={totalCount} />
        </div>
        </div>
    );
}
