'use client';
import styles from './StatisticsSearch.module.scss';
import SelectWithData from '@/components/SelectWithData';
import useGetAllGroups from '@/hooks/useGetAllGroups';
import useGetAllCategories from '@/hooks/useGetAllCategories';
import useGetAllShops from '@/hooks/useGetAllShops';
import useGetAllSubcategories from '@/hooks/useGetAllSubcategories';
import Toggle from '@/components/Toggle';

export default function StatisticsSearch() {
  const { allData: groups } = useGetAllGroups();
  const { allData: categories } = useGetAllCategories();
  const { allData: shops } = useGetAllShops(1, 20);
  const { allData: subcategories } = useGetAllSubcategories();
  console.log('StatisticsSearch');

  const shopsData = shops.map(data => ({
    value: data.id.toString(),
    label: data.store,
  }));

  return (
    <section className={styles.statisticsSearch}>
      <form className={styles.statisticsSearch__form}>
        <SelectWithData placeholder="ТК" data={shopsData} />
        <SelectWithData placeholder="Группа" data={groups} />
        <SelectWithData placeholder="Категория" data={categories} />
        <SelectWithData placeholder="Подкатегория" data={subcategories} />
        <SelectWithData placeholder="Test" data={subcategories} />
        <Toggle />
      </form>
    </section>
  );
}