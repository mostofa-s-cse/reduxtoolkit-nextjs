'use client'
import Counter from "@/components/Counter";
import Stats from "@/components/Stats";
import {useState} from "react";
import count from "@/components/Count";

const initialCounters = [
    {
        id: 1,
        value:0
    },
    {
        id: 2,
        value:0
    }
]
export default function Home() {
    const [counters,setCounters] = useState(initialCounters);
    const totalCount = counters.reduce((sum, current)=> sum + current.value,0)
    const handleIncrement = (counterId) => {
       const updatedCounters = counters.map(counter=>{
            if(counter.id === counterId){
                return{
                    ...counter,
                    value: counter.value + 1
                }
            }
            return counter;
        })
        setCounters(updatedCounters);
    };
    const handleDecrement = (counterId) => {
        const updatedCounters = counters.map(counter=>{
            if(counter.id === counterId){
                return{
                    ...counter,
                    value: counter.value - 1
                }
            }
            return counter;
        })
        setCounters(updatedCounters);
    };


    return (
        <div>
            <h2 className="py-6 text-2xl font-semibold text-center">Simple Counter Application Using ReduxToolkit</h2>
            {
                counters.map((counter) =>(<Counter key={counter.id} count={counter.value} onIncrement={()=>handleIncrement(counter.id)} onDecrement={()=>handleDecrement(counter.id)} />) )
            }
            <Stats TotalCount={totalCount} />
        </div>
    );
}
