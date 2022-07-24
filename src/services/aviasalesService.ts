import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { ITicket } from 'src/models/ITicket';
const API_URL = 'http://localhost:3001';

export const aviasalesAPI = createApi({
    reducerPath: 'aviasalesApi',
    baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
    endpoints: (build) => ({
        getTickets: build.query<ITicket[], number>({
            query: () => `/tickets`,
        }),
    }),
});

export const { useGetTicketsQuery } = aviasalesAPI;

export const { getTickets } = aviasalesAPI.endpoints;
