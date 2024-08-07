import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Counter {
    id: number;
    value: number;
    message: string;
}

interface CountersState {
    counters: Counter[];
}

const initialState: CountersState = {
    counters: [
        { id: 1, value: 0, message: '' }
    ]
};

const countersSlice = createSlice({
    name: "counters",
    initialState,
    reducers: {
        increment: (state, action: PayloadAction<number>) => {
            const counterIndex = state.counters.findIndex(
                (c) => c.id === action.payload
            );
            if (counterIndex >= 0) {
                state.counters[counterIndex].value += 1;
                state.counters[counterIndex].message = ''; // Clear the message if any
            }
        },
        decrement: (state, action: PayloadAction<number>) => {
            const counterIndex = state.counters.findIndex(
                (c) => c.id === action.payload
            );
            if (counterIndex >= 0) {
                if (state.counters[counterIndex].value > 0) {
                    state.counters[counterIndex].value -= 1;
                    state.counters[counterIndex].message = ''; // Clear the message if any
                } else {
                    state.counters[counterIndex].message = 'Value cannot be negative';
                }
            }
        },
        addCounter: (state) => {
            const newId = state.counters.length ? state.counters[state.counters.length - 1].id + 1 : 1;
            state.counters.push({ id: newId, value: 0, message: '' });
        },
        resetCounter: (state, action: PayloadAction<number>) => {
            const counterIndex = state.counters.findIndex(
                (c) => c.id === action.payload
            );
            if (counterIndex >= 0) {
                state.counters[counterIndex].value = 0;
                state.counters[counterIndex].message = '';
            }
        }
    }
});

export default countersSlice.reducer;
export const { increment, decrement, addCounter, resetCounter } = countersSlice.actions;
