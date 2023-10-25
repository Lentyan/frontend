import { useState, useEffect } from 'react';
import { useGetSalesQuery } from '@/redux/lenta/lenta.api';

const useFetchAllSalesData = (stores, sku) => {
  const [page, setPage] = useState(1);
  const shouldSkip = !sku.length || !stores.length;
  const { data, error, isLoading } = useGetSalesQuery({ sku, stores, page}, {skip: shouldSkip});

  useEffect(() => {
    if (data && !data.next) {
      setPage(null);
    } else if (data && data.next) {
      setPage(prevPage => prevPage + 1);
    }
  }, [data]);

  return { data: data?.results, error, isLoading };
};

export default useFetchAllSalesData;
