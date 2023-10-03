import { configureStore } from '@reduxjs/toolkit';
import { lentaApi } from '@/redux/lenta/lenta.api';

export const store = configureStore({
  reducer: {
    [lentaApi.reducerPath]: lentaApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(lentaApi.middleware),
});
