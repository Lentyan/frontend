'use client';

import SelectWithData from '@/components/SelectWithData';
import useGetAllGroups from '@/hooks/useGetAllGroups';
import useGetAllCategories from '@/hooks/useGetAllCategories';
import useGetAllShops from '@/hooks/useGetAllShops';

export default function StatisticsSearch() {
  const { allData: groups } = useGetAllGroups();
  const { allData: categories } = useGetAllCategories();
  const { allData: shops } = useGetAllShops();
  console.log('StatisticsSearch');

  const shopsData = shops.map(data => ({
    value: data.id.toString(),
    label: data.store,
  }));

  return (
    <>
      <form>
        <SelectWithData placeholder="ТК" data={shopsData} />
        <SelectWithData placeholder="Группа" data={groups} />
        <SelectWithData placeholder="Категория" data={categories} />
      </form>
    </>
  );
}