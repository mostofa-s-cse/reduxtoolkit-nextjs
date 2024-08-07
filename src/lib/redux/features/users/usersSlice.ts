// usersSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface User {
    id: number;
    name: string;
    email: string;
    address: string;
}

interface UsersState {
    users: User[];
}

const initialState: UsersState = {
    users: [],
};

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        addUser(state, action: PayloadAction<User>) {
            state.users.push(action.payload);
        },
        updateUser(state, action: PayloadAction<User>) {
            const index = state.users.findIndex(user => user.id === action.payload.id);
            if (index !== -1) {
                state.users[index] = action.payload;
            }
        },
        deleteUser(state, action: PayloadAction<number>) {
            state.users = state.users.filter(user => user.id !== action.payload);
        },
        resetUserForm(state, action: PayloadAction<number>) {
            const index = state.users.findIndex(user => user.id === action.payload);
            if (index !== -1) {
                state.users[index] = { id: action.payload, name: '', email: '', address: '' };
            }
        },
    },
});

export default usersSlice.reducer;
export const { addUser, updateUser, deleteUser, resetUserForm } = usersSlice.actions;
