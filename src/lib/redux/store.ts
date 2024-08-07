import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './features/counters/countersSlice';
import usersReducer from './features/users/usersSlice';
const store = configureStore({
    reducer: {
        counters: counterReducer,
        users: usersReducer,
        // add author feature here...
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
