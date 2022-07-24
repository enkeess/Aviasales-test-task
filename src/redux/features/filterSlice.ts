import { createSlice } from '@reduxjs/toolkit';
import { TransferType } from 'src/enums/TransferType';

const initialState = {
    filters: [true, true, true, true, true],
};

export const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        updateFilter: (state, action) => {
            const t = action.payload;
            if (action.payload === TransferType.ALL) {
                if (!state.filters[t]) {
                    state.filters = state.filters.map(() => true);
                }
            } else {
                state.filters[t] = !state.filters[t];
                state.filters[TransferType.ALL] = !state.filters
                    .slice(0, 4)
                    .includes(false);
            }
        },
    },
});

export const { updateFilter } = filterSlice.actions;

export const filterReducer = filterSlice.reducer;
