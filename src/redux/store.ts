import { configureStore } from '@reduxjs/toolkit';
import { lentaApi } from '@/redux/lenta/lenta.api';
import searchFormReducer from '@/redux/form/formSlice';

export const store = configureStore({
  reducer: {
    [lentaApi.reducerPath]: lentaApi.reducer,
    searchForm: searchFormReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(lentaApi.middleware),
});

export type TypeRootState = ReturnType<typeof store.getState>;
