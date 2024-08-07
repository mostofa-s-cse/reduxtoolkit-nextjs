import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    counters: [
        { id: 1, value: 0, message: '' },
        { id: 2, value: 0, message: '' },
        { id: 3, value: 0, message: '' },
    ]
};

const countersSlice = createSlice({
    name: "counters",
    initialState,
    reducers: {
        increment: (state, action) => {
            const counterIndex = state.counters.findIndex(
                (c) => c.id === action.payload
            );
            state.counters[counterIndex].value += 1;
            state.counters[counterIndex].message = ''; // Clear the message if any
        },
        decrement: (state, action) => {
            const counterIndex = state.counters.findIndex(
                (c) => c.id === action.payload
            );
            if (state.counters[counterIndex].value > 0) {
                state.counters[counterIndex].value -= 1;
                state.counters[counterIndex].message = ''; // Clear the message if any
            } else {
                state.counters[counterIndex].message = 'Value cannot be negative';
            }
        }
    }
});

export default countersSlice.reducer;
export const { increment, decrement } = countersSlice.actions;
