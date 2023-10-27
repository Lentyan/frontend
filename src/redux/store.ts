import { configureStore } from '@reduxjs/toolkit';
import { lentaApi } from '@/redux/lenta/lenta.api';
import searchFormReducer from '@/redux/lenta/form/formSlice';
import dateSalesReducer from '@/redux/lenta/sales/dataSalesSlice';

export const store = configureStore({
  reducer: {
    [lentaApi.reducerPath]: lentaApi.reducer,
    searchForm: searchFormReducer,
    dataSales: dateSalesReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(lentaApi.middleware),
});

export type TypeRootState = ReturnType<typeof store.getState>;
