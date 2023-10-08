'use client';

import { useEffect, useState } from 'react';
import { useGetGroupQuery } from '@/redux/lenta/lenta.api';

export default function useGetGroups(stores: string[]) {
  const [allData, setAllData] = useState<string[]>([]);
  const { data, isLoading, isError } = useGetGroupQuery({ stores });

  useEffect(() => {
    if (!isLoading && data && data?.groups) {
      setAllData((prevData) => [...prevData, ...data.groups]);
    }
  }, [data, isLoading]);

  return { allData, isError, isLoading };
}