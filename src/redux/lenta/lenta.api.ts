import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Shop, ShopApiResponse } from '@/interfaces/Shop';
import { Category } from '@/interfaces/Category';

interface GetPageParams {
  page?: number;
  limit?: number;
}

export const lentaApi = createApi({
  reducerPath: 'shopApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:80/',
  }),
  endpoints: build => ({
    getShops: build.query<ShopApiResponse<Shop>, GetPageParams>({
      query: ( { page = 1, limit = 10 } = {}) => ({
        url: 'api/v1/shops/',
        params: {
          page,
          limit,
        },
      }),
    }),
    getCategories: build.query<Category, void>({
      query: () => ({
        url: 'api/v1/categories/',
      }),
    }),
  }),
});

export const { useGetShopsQuery, useGetCategoriesQuery } = lentaApi;