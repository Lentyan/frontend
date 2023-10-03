'use client';

import { useEffect, useState } from 'react';
import { useGetCategoriesQuery } from '@/redux/lenta/lenta.api';

export default function useGetAllCategories() {
  const [allData, setAllData] = useState<string[]>([]);
  const { data, isLoading, isError } = useGetCategoriesQuery();

  useEffect(() => {
    if (!isLoading && data && data?.categories) {
      setAllData((prevData) => [...prevData, ...data.categories]);
    }
  }, [data, isLoading]);

  return { allData, isError, isLoading };
}