'use client';

import { useEffect, useState } from 'react';
import { Sku } from '@/interfaces/Sku';
import { useLazyGetSkuQuery } from '@/redux/lenta/lenta.api';

export default function useGetSku(subcategories: string[]) {
  const [allSku, setAllSku] = useState<Sku[]>([]);
  const [page, setPage] = useState(1);
  const [ fetchSku, { data, isError, isLoading } ] = useLazyGetSkuQuery();

  useEffect(() => {
    if (!isLoading && data) {
      setAllSku((prevData) => [...prevData, ...data.results]);
      if (data.next) {
        setPage((prevPage) => prevPage + 1);
      }
    }
  }, [data, isLoading]);

  // Запрашиваем данные при изменении `page`.
  useEffect(() => {
    if (subcategories.length > 0) {
      fetchSku({ subcategories, page, limit: 5 });
    }
  }, [page, fetchSku]);

  return { allSku, fetchSku };
}
