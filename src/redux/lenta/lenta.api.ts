import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Shop, ShopApiResponse } from '@/interfaces/Shop';
import { Category } from '@/interfaces/Category';
import { Group } from '@/interfaces/Group';
import { Subcategory } from '@/interfaces/Subcategory';
import { Sku, SkuResponse } from '@/interfaces/Sku';

export const lentaApi = createApi({
  reducerPath: 'shopApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:80/',
  }),
  endpoints: build => ({
    getShops: build.query<ShopApiResponse<Shop>, { page?: number, limit?: number }>({
      query: ({ page = 1, limit = 10 } = {}) => ({
        url: 'api/v1/shops/',
        params: {
          page,
          limit,
        },
      }),
    }),
    getGroup: build.query<Group, { stores: string[] }>({
      query: ({ stores }) => ({
        url: `api/v1/groups/?${stores.map(store => `store=${store}`).join('&')}`,
      }),
    }),
    getCategories: build.query<Category, { groups: string[] }>({
      query: ({ groups }) => ({
        url: `api/v1/categories/?${groups.map(group => `group=${group}`).join('&')}`,
      }),
    }),
    getSubcategory: build.query<Subcategory, { categories: string[] }>({
      query: ({ categories }) => ({
        url: `api/v1/subcategories/?${categories.map(category => `category=${category}`).join('&')}`,
      }),
    }),
    getSku: build.query<SkuResponse<Sku>, { subcategories: string[] }>({
      query: ({ subcategories }) => ({
        url: `api/v1/skus/?${subcategories.map(subcategory => `subcategory=${subcategory}`).join('&')}`,
      }),
    }),
  }),
});

export const {
  useGetShopsQuery,
  useLazyGetGroupQuery,
  useLazyGetCategoriesQuery,
  useLazyGetSubcategoryQuery,
  useLazyGetSkuQuery,
} = lentaApi;