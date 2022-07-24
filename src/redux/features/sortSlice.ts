import { createSlice } from '@reduxjs/toolkit';
import { SortType } from 'src/enums/SortType';

const initialState = {
    sort: SortType.CHEAP,
};

export const sortSlice = createSlice({
    name: 'sort',
    initialState,
    reducers: {
        updateSort: (state, action) => {
            state.sort = action.payload;
        },
    },
});

export const { updateSort } = sortSlice.actions;

export const sortReducer = sortSlice.reducer;
