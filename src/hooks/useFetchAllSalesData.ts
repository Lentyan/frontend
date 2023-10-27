import { useState, useEffect } from 'react';
import { useGetSalesQuery } from '@/redux/lenta/lenta.api';
import { Sale } from '@/interfaces/Sale';

const useFetchAllSalesData = (stores: string[], sku: string[]) => {
  const [page, setPage] = useState(1);
  const [allPagesFetched, setAllPagesFetched] = useState(false);
  const [allData, setAllData] = useState<Sale[]>([]);
  const shouldSkip = !sku.length || !stores.length;
  const { data, error, isLoading } = useGetSalesQuery({ sku, stores, page }, { skip: shouldSkip || allPagesFetched });

  useEffect(() => {
    setAllPagesFetched(false);
    setPage(1);
    setAllData([]);
  }, [stores, sku]);

  useEffect(() => {
    if (data && !data.next) {
      setAllPagesFetched(true);
    } else if (data && data.next) {
      setPage(prevPage => prevPage + 1);
    }
  }, [data]);

  useEffect(() => {
    if (data?.results) {
      setAllData(prevData => [...prevData, ...data.results]);
    }
  }, [data]);

  return { data: allData, error, isLoading };
};

export default useFetchAllSalesData;
