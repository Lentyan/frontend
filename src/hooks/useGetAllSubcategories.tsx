'use client';

import { useEffect, useState } from 'react';
import { useGetSubcategoryQuery } from '@/redux/lenta/lenta.api';


export default function useGetAllSubcategories() {
  const [allData, setAllData] = useState<string[]>([]);
  const { data, isLoading, isError } = useGetSubcategoryQuery();

  useEffect(() => {
    if (!isLoading && data && data?.subcategories) {
      setAllData((prevData) => [...prevData, ...data.subcategories]);
    }
  }, [data, isLoading]);

  return { allData, isError, isLoading };
}