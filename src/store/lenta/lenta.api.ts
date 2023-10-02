import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const lentaApi = createApi({
  reducerPath: 'localhost:80',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:80/',
  }),
  endpoints: build => ({
    getShops: build.query<any, number | void>({
      query: ( page = 1 ) => ({
        url: `api/v1/shops/?page=${page}`,
      }),
    }),
  }),
});

export const { useGetShopsQuery } = lentaApi;