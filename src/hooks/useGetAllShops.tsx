'use client';

import { useEffect, useState } from 'react';
import { Shop } from '@/interfaces/Shop';
import { useGetShopsQuery } from '@/redux/lenta/lenta.api';


export default function useGetAllShops(initialPage = 1, limit?: number) {
  const [allData, setAllData] = useState<Shop[]>([]);
  const [page, setPage] = useState(initialPage);
  const { data, isError, isLoading } = useGetShopsQuery({ page, limit });

  useEffect(() => {
    if (!isLoading && data) {
      setAllData((prevData) => [...prevData, ...data.results]);
      if (data.next) {
        setPage((prevPage) => prevPage + 1);
      }
    }
  }, [data, isLoading]);

  return { allData, isLoading, isError };
}