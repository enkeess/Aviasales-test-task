import { configureStore } from '@reduxjs/toolkit';
import { aviasalesAPI } from 'src/services/aviasalesService';
import { filterReducer } from './features/filterSlice';
import { sortReducer } from './features/sortSlice';
import { ticketsReducer } from './features/ticketsSlice';

const store = configureStore({
    reducer: {
        sortReducer,
        filterReducer,
        ticketsReducer,
        [aviasalesAPI.reducerPath]: aviasalesAPI.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(aviasalesAPI.middleware),
});

export default store;

export type AppStore = typeof store;
export type AppDispatch = AppStore['dispatch'];
export type RootState = ReturnType<AppStore['getState']>;
