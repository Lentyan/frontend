import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Shop, ShopApiResponse } from '@/interfaces/Shop';

export const lentaApi = createApi({
  reducerPath: 'shopApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:80/',
  }),
  endpoints: build => ({
    getShops: build.query<ShopApiResponse<Shop>, number | void>({
      query: ( page = 1) => ({
        url: 'api/v1/shops/',
        params: {
          page,
        },
      }),
    }),
  }),
});

export const { useGetShopsQuery } = lentaApi;