import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    limit: 2,
    total: Infinity,
    isFull: false,
};

export const ticketsSlice = createSlice({
    name: 'tickets',
    initialState,
    reducers: {
        incLimit: (state, action) => {
            state.limit += action.payload;
            state.limit = Math.min(state.limit, state.total);
            state.isFull = state.limit === state.total;
        },

        setTotal: (state, action) => {
            state.total = action.payload;
        },
    },
});

export const { incLimit, setTotal } = ticketsSlice.actions;

export const ticketsReducer = ticketsSlice.reducer;
