'use client';

import { useEffect, useState } from 'react';
import { useGetShopsQuery } from '@/redux/lenta/lenta.api';

export default function useGetAllShops() {
  const [allShops, setAllShops] = useState<any[]>([]);
  const [page, setPage] = useState(1);
  const { data, isError, isLoading } = useGetShopsQuery(page);

  useEffect(() => {
    if (!isLoading && data && data.results) {
      setAllShops(prevShops => [...prevShops, ...data.results]);
      if (data.next) {
        setPage(prevPage => prevPage + 1);
      }
    }
  }, [data, isLoading]);

  return { allShops, isLoading, isError };
}