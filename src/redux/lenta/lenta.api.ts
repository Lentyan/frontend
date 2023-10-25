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
    getAllShops: build.query<ShopApiResponse<Shop>, { page?: number, limit?: number }>({
      query: ({ page = 1, limit = 200 } = {}) => ({
        url: 'api/v1/shops/',
        params: {
          page,
          limit,
        },
      }),
    }),
    getGroups: build.query<Group, { stores: string[] }>({
      query: ({ stores }) => ({
        url: `api/v1/groups/?${stores.map(store => `store=${store}`).join('&')}`,
      }),
    }),
    getCategories: build.query<Category, { groups: string[] }>({
      query: ({ groups }) => ({
        url: `api/v1/categories/?${groups.map(group => `group=${group}`).join('&')}`,
      }),
    }),
    getSubcategories: build.query<Subcategory, { categories: string[] }>({
      query: ({ categories }) => ({
        url: `api/v1/subcategories/?${categories.map(category => `category=${category}`).join('&')}`,
      }),
    }),
    getSku: build.query<SkuResponse<Sku>, { subcategories: string[], page?: number, limit?: number }>({
      query: ({ subcategories, page = 1, limit = 200 }) => ({
        url: `api/v1/skus/?${subcategories.map(subcategory => `subcategory=${subcategory}`).join('&')}`,
        params: {
          page,
          limit,
        },
      }),
    }),
    getSales: build.query<any, { stores: string[], sku: string[], page?: number, limit?: number }>({
      query: ({ sku, stores, page = 1, limit = 200 }) => {
        const skuQuery = sku.map(skuId => `sku=${skuId}`).join('&');
        const storesQuery = stores.map(storeId => `stores=${storeId}`).join('&');
        return {
          url: `api/v1/sales/?${skuQuery}&${storesQuery}`,
          params: {
            page,
            limit,
          },
        };
      },
    }),
  }),
});

export const {
  useGetAllShopsQuery,
  useGetGroupsQuery,
  useGetCategoriesQuery,
  useGetSubcategoriesQuery,
  useGetSkuQuery,
  useGetSalesQuery,
} = lentaApi;