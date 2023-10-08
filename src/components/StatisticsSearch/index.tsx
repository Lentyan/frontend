'use client';
import styles from './StatisticsSearch.module.scss';
import SelectWithData from '@/components/SelectWithData';
import useGetAllGroups from '@/hooks/useGetGroups';
import useGetAllCategories from '@/hooks/useGetAllCategories';
import useGetAllSubcategories from '@/hooks/useGetAllSubcategories';
import useGetAllShops from '@/hooks/useGetAllShops';
import Toggle from '@/components/Toggle';
import Calendar from '@/components/Calendar';
import {
  useLazyGetCategoriesQuery,
  useLazyGetGroupQuery, useLazyGetSkuQuery,
  useLazyGetSubcategoryQuery,
} from '@/redux/lenta/lenta.api';
import { useEffect, useState } from 'react';
import { useTypedSelector } from '@/hooks/useTypedSelector';

import { useActions } from '@/hooks/useActions';


export default function StatisticsSearch() {
  const [processedDataGroups, setProcessedDataGroups] = useState([]);
  const [processedDataCategories, setProcessedDataCategories] = useState([]);
  const [processedDataSubcategories, setProcessedDataSubcategories] = useState([]);
  const [processedDataSku, setProcessedDataSku] = useState([]);
  const { setFieldEnabled } = useActions();


  const { allShops } = useGetAllShops(1, 20);
  const [fetchGroups, { data: dataGroups }] = useLazyGetGroupQuery();
  const [fetchCategories, { data: dataCategories }] = useLazyGetCategoriesQuery();
  const [fetchSubcategories, { data: dataSubcategories }] = useLazyGetSubcategoryQuery();
  const [fetchSku, { data: dataSku }] = useLazyGetSkuQuery();

  const { shops: selectedShops } = useTypedSelector((state) => state.searchForm.fields);
  const { groups: selectedGroups } = useTypedSelector((state) => state.searchForm.fields);
  const { categories: selectedCategories } = useTypedSelector((state) => state.searchForm.fields);
  const { subcategories: selectedSubcategories } = useTypedSelector((state) => state.searchForm.fields);
  const shopsData = allShops.map(data => ({
    value: data.id.toString(),
    label: data.store,
  }));


  // получение групп
  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    if (selectedShops && selectedShops.value.length > 0) {
      const shopsId = selectedShops.value.map(item => item.value);
      setFieldEnabled({ fieldName: 'groups', isEnabled: true });
      timeoutId = setTimeout(() => {
        fetchGroups({ stores: shopsId });
      }, 1000);
    } else {
      setFieldEnabled({ fieldName: 'groups', isEnabled: false });
    }
    return () => {
      clearTimeout(timeoutId);
    };
  }, [selectedShops, fetchGroups]);

  useEffect(() => {
    if (dataGroups) {
      const newData = dataGroups.groups.map(data => ({
        value: data,
        label: data,
      }));
      setProcessedDataGroups(newData);
    }
  }, [dataGroups]);


  // получение категорий
  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    if (selectedGroups && selectedGroups.value.length > 0) {
      const groups = selectedGroups.value.map(item => item.value);
      setFieldEnabled({ fieldName: 'categories', isEnabled: true });
      timeoutId = setTimeout(() => {
        fetchCategories({ groups: groups });
      }, 1000);
    } else {
      setFieldEnabled({ fieldName: 'categories', isEnabled: false });
    }
    return () => {
      clearTimeout(timeoutId);
    };
  }, [selectedGroups, fetchCategories]);

  useEffect(() => {
    if (dataCategories) {
      const newData = dataCategories.categories.map(data => ({
        value: data,
        label: data,
      }));
      setProcessedDataCategories(newData);
    }
  }, [dataCategories]);

  // получение подкатегорий
  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    if (selectedCategories && selectedCategories.value.length > 0) {
      const categories = selectedCategories.value.map(item => item.value);
      setFieldEnabled({ fieldName: 'subcategories', isEnabled: true });
      timeoutId = setTimeout(() => {
        fetchSubcategories({ categories: categories });
      }, 1000);
    } else {
      setFieldEnabled({ fieldName: 'subcategories', isEnabled: false });
    }
    return () => {
      clearTimeout(timeoutId);
    };
  }, [selectedCategories, fetchSubcategories]);

  useEffect(() => {
    if (dataSubcategories) {
      const newData = dataSubcategories.subcategories.map(data => ({
        value: data,
        label: data,
      }));
      setProcessedDataSubcategories(newData);
    }
  }, [dataSubcategories]);

  // получение SKU товаров
  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    if (selectedSubcategories && selectedSubcategories.value.length > 0) {
      const subcategories = selectedSubcategories.value.map(item => item.value);
      setFieldEnabled({ fieldName: 'sku', isEnabled: true });
      timeoutId = setTimeout(() => {
        fetchSku({ subcategories: subcategories });
      }, 1000);
    } else {
      setFieldEnabled({ fieldName: 'sku', isEnabled: false });
    }
    return () => {
      clearTimeout(timeoutId);
    };
  }, [selectedSubcategories, fetchSku]);

  useEffect(() => {
    console.log(dataSku);
    if (dataSku) {
      const newData = dataSku.subcategories.map(data => ({
        value: data,
        label: data,
      }));
      setProcessedDataSku(newData);
    }
  }, [dataSku]);



  return (
    <section className={styles.statisticsSearch}>
      <form className={styles.statisticsSearch__form}>
        <SelectWithData placeholder="ТК" data={shopsData} fieldName="shops" />
        <SelectWithData placeholder="Группа" data={processedDataGroups} fieldName="groups" />
        <SelectWithData placeholder="Категория" data={processedDataCategories} fieldName="categories"  />
        <SelectWithData placeholder="Подкатегория" data={processedDataSubcategories} fieldName="subcategories"  />
        <SelectWithData placeholder="Товар" data={processedDataSku} fieldName="sku"  />
        <Toggle />
        <Calendar />
      </form>
    </section>
  );
}